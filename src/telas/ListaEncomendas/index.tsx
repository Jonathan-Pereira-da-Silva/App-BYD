import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import axios from 'axios'
import Texto from '../../componentes/Texto'

export default function ListaEncomendas({ itens }: any) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/encomendas_web')
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const cadaItem = ({ item }) => {
    // buscar o produto referente à encomenda
    const produtoEncontrado = itens.lista.find(
      (p: any) => p.nome === item.produto
    )

    return (
      <View style={styles.card}>
        {produtoEncontrado && (
          <Image
            source={produtoEncontrado.imagem}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Texto style={styles.title}>{item.nome}</Texto>
        <Texto style={styles.description}>Produto: {item.produto}</Texto>
        <Texto style={styles.description}>Quantidade: {item.qtde}</Texto>
        <Texto style={styles.description}>Valor: R$ {item.valor}</Texto>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFF" />
        <Texto style={styles.loadingText}>Carregando encomendas...</Texto>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Texto style={styles.loadingText}>Erro ao carregar dados.</Texto>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Texto style={styles.titulo}>Lista de Encomendas</Texto>
      <FlatList
        data={data}
        renderItem={cadaItem}
        keyExtractor={({ id }) => String(id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252728",
    padding: 10,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
    paddingBottom: 15,
    marginTop: 10
  },
  card: {
    backgroundColor: "#2D2F30",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C6C8C7",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#C6C8C7",
    marginBottom: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252728",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#C6C8C7",
  },
})