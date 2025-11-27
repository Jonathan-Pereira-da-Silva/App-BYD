import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StatusBar, Image, Modal, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../../utils/supabase';
import { Card } from 'react-native-paper';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ProdutosStackParamList, ProdutoType } from "../../navigation/tiposProdutosStack";
import { StackNavigationProp } from "@react-navigation/stack";

import Texto from '../../componentes/Texto';
import styles from './estilosListaProdutos';

type ListaProdutosScreenNavigationProp = StackNavigationProp<
  ProdutosStackParamList,
  'ListaProdutos'
>;

export default function ListaProdutos() {
  const navigation = useNavigation<ListaProdutosScreenNavigationProp>();

  const [todos, setTodos] = useState<ProdutoType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useFocusEffect(
    // O useCallback garante que a função de efeito só seja recriada quando suas dependências mudarem.
    // Neste caso, ele só rodará quando a tela for focada.
    useCallback(() => {
      carregarProdutos();
      // Você não precisa de dependências aqui, pois carregarProdutos não depende de props ou state voláteis.
    }, [])
  );

  const carregarProdutos = async () => {
    const { data, error } = await supabase
      .from('produtos')
      .select('id, nome, valor_unit, imagem');

    if (error) {
      console.error('Erro ao buscar produtos:', error.message);
      Alert.alert('Erro', 'Não foi possível carregar os produtos');
      return;
    }

    setTodos(data || []);
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(valor);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const excluirProduto = (id: number) => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            const { error } = await supabase
              .from("produtos")
              .delete()
              .eq("id", id);

            if (!error) {
              carregarProdutos();
              Alert.alert("Sucesso", "Produto excluído com sucesso!");
            } else {
              Alert.alert("Erro ao excluir", error.message);
            }
          },
        },
      ]
    );
  };

  const cadaItem = ({ item }: { item: ProdutoType }) => {
    return (
      <View style={styles.cardContainer}>
        <Card mode="contained" style={styles.card}>
          <Card.Content>
            <TouchableOpacity onPress={() => openImageModal(item.imagem)}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Texto style={styles.titulo}>{item.nome}</Texto>
            <Texto style={styles.valor}>{formatarMoeda(item.valor_unit)}</Texto>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1E90FF',
                  padding: 8,
                  borderRadius: 6,
                  width: '48%',
                }}
                onPress={() => navigation.navigate("EditarProduto", { produto: item })}
              >
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#FF4444',
                  padding: 8,
                  borderRadius: 6,
                  width: '48%',
                }}
                onPress={() => excluirProduto(item.id)}
              >
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.fundo}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.tituloHeader}>Lista de Produtos</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={cadaItem}
        numColumns={2}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={{ color: '#C6C8C7', fontSize: 16 }}>Nenhum produto encontrado</Text>
          </View>
        }
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 25,
          right: 25,
          backgroundColor: '#32CD32',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
          zIndex: 1000,
        }}
        onPress={() => navigation.navigate("AdicionarProduto")}
      >
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeImageModal}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeImageModal}
        >
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullScreenImage}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </Modal>
    </View>
  );
}