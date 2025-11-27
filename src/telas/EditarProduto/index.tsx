import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../../utils/supabase";
import styles from "./estilosEditarProduto";
import { ProdutosStackParamList } from "../../navigation/tiposProdutosStack";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type EditarProdutoRouteProp = RouteProp<
  ProdutosStackParamList,
  'EditarProduto'
>;

type EditarProdutoNavigationProp = StackNavigationProp<
  ProdutosStackParamList,
  'EditarProduto'
>;

type ImagePickerResult = {
  uri: string;
  type?: string;
  name?: string;
};

export default function EditarProduto() {
  const route = useRoute<EditarProdutoRouteProp>();
  const navigation = useNavigation<EditarProdutoNavigationProp>();

  const { produto } = route.params;

  const [nome, setNome] = useState(produto.nome);
  const [valor, setValor] = useState(String(produto.valor_unit));
  const [imagemLocal, setImagemLocal] = useState<ImagePickerResult | null>(null);
  const [uploading, setUploading] = useState(false);

  const escolherImagem = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos de acesso à sua galeria para selecionar imagens.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImagemLocal({
          uri: result.assets[0].uri,
          type: 'image/jpeg',
          name: `image_${Date.now()}.jpg`
        });
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem');
    }
  };

  const uploadImagem = async (uri: string): Promise<string | null> => {
    try {
      const fileName = `produto_${Date.now()}.jpg`;
      
      const formData = new FormData();
      formData.append('file', {
        uri: uri,
        type: 'image/jpeg',
        name: fileName,
      } as any);

      const { data, error } = await supabase.storage
        .from("produtos")
        .upload(fileName, formData, {
          contentType: 'image/jpeg',
        });

      if (error) {
        console.error('Erro no upload:', error);
        throw error;
      }

      const { data: urlData } = supabase.storage
        .from("produtos")
        .getPublicUrl(fileName);

      return urlData.publicUrl;
    } catch (error: any) {
      console.error('Erro no upload:', error);
      Alert.alert("Erro no upload", error.message || "Não foi possível fazer upload da imagem");
      return null;
    }
  };

  const salvarEdicao = async () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "Digite o nome do produto.");
      return;
    }

    if (!valor.trim() || isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
      Alert.alert("Erro", "Digite um valor válido para o produto.");
      return;
    }

    setUploading(true);

    try {
      let imagemFinal = produto.imagem;

      if (imagemLocal) {
        console.log("Fazendo upload da nova imagem...");
        const url = await uploadImagem(imagemLocal.uri);
        if (url) {
          imagemFinal = url;
        } else {
          setUploading(false);
          return;
        }
      }

      console.log("Atualizando produto...");
      const { data, error } = await supabase
        .from("produtos")
        .update({
          nome: nome.trim(),
          valor_unit: parseFloat(valor),
          imagem: imagemFinal,
        })
        .eq("id", produto.id)
        .select();

      if (error) {
        console.error('Erro ao atualizar produto:', error);
        Alert.alert("Erro", error.message);
        return;
      }

      console.log("Produto atualizado com sucesso:", data);
      Alert.alert("Sucesso", "Produto atualizado com sucesso!");
      navigation.goBack();
      
    } catch (error: any) {
      console.error('Erro no processo de atualização:', error);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar o produto");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        placeholderTextColor="#999"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity 
        style={styles.botaoImagem} 
        onPress={escolherImagem}
        disabled={uploading}
      >
        <Text style={styles.textoBotao}>Trocar Imagem</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: imagemLocal?.uri || produto.imagem }}
        style={styles.preview}
      />

      <TouchableOpacity
        style={[
          styles.botaoSalvar,
          uploading && { backgroundColor: '#888' }
        ]}
        onPress={salvarEdicao}
        disabled={uploading}
      >
        <Text style={styles.textoBotao}>
          {uploading ? "Salvando..." : "Salvar Alterações"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}