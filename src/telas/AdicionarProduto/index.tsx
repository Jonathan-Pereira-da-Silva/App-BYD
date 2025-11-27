import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../../utils/supabase";
import styles from "./estilosAdicionarProduto";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProdutosStackParamList } from "../../navigation/tiposProdutosStack";

type AdicionarProdutoNavigationProp = StackNavigationProp<
  ProdutosStackParamList,
  'AdicionarProduto'
>;

type ImagePickerResult = {
  uri: string;
  type?: string;
  name?: string;
};

export default function AdicionarProduto() {
  const navigation = useNavigation<AdicionarProdutoNavigationProp>();

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
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
      
      // Converte a imagem para FormData
      const formData = new FormData();
      formData.append('file', {
        uri: uri,
        type: 'image/jpeg',
        name: fileName,
      } as any);

      // Faz o upload usando o método do Supabase
      const { data, error } = await supabase.storage
        .from("produtos")
        .upload(fileName, formData, {
          contentType: 'image/jpeg',
        });

      if (error) {
        console.error('Erro no upload:', error);
        throw error;
      }

      // Obtém a URL pública
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

  const salvarProduto = async () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "Digite o nome do produto.");
      return;
    }

    if (!valor.trim() || isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
      Alert.alert("Erro", "Digite um valor válido para o produto.");
      return;
    }

    setUploading(true);
    let urlImagem: string | null = null; // Inicializa a URL como null

    try {
      if (imagemLocal) { // Faz o upload SOMENTE SE houver uma imagem selecionada
        console.log("Fazendo upload da imagem...");
        urlImagem = await uploadImagem(imagemLocal.uri);
        
        if (!urlImagem) {
          // Se o upload falhou, mas a imagem era opcional, 
          // podemos decidir se queremos abortar ou continuar sem imagem.
          // Vamos abortar se o upload foi tentado e falhou.
          setUploading(false);
          return; 
        }
      }

      console.log("Inserindo no banco...");
      
      // O campo `imagem` receberá a URL ou `null` (se urlImagem for null)
      const { data, error } = await supabase
        .from("produtos")
        .insert({
          nome: nome.trim(),
          valor_unit: parseFloat(valor),
          imagem: urlImagem, // Pode ser uma URL ou null
        })
        .select();

      if (error) {
        console.error('Erro ao salvar produto:', error);
        Alert.alert("Erro ao salvar", error.message);
        return;
      }

      console.log("Produto salvo com sucesso:", data);
      Alert.alert("Sucesso", "Produto salvo com sucesso!");
      navigation.goBack();
      
    } catch (error: any) {
      console.error('Erro no processo de salvamento:', error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o produto");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor (ex: 29.99)"
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
        <Text style={styles.textoBotao}>
          {imagemLocal ? "Alterar Imagem" : "Selecionar Imagem"}
        </Text>
      </TouchableOpacity>

      {imagemLocal && (
        <Image 
          source={{ uri: imagemLocal.uri }} 
          style={styles.preview} 
        />
      )}

      <TouchableOpacity
        style={[
          styles.botaoSalvar,
          uploading && { backgroundColor: '#888' }
        ]}
        onPress={salvarProduto}
        disabled={uploading}
      >
        <Text style={styles.textoBotao}>
          {uploading ? "Salvando..." : "Salvar Produto"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}