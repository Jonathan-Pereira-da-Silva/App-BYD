import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import Texto from "../componentes/Texto";

interface Noticia {
  title: string;
  description: string;
  body: string;
  imageUrl?: string;
  url?: string;
  publishedAt?: string;
  sourceName?: string;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(
          "https://gnews.io/api/v4/search?q=BYD&lang=pt&token=e276861185a03a266e40ec2f2ccf488f"
        );
        const data = await response.json();

        setNoticias(
          (data.articles || []).map((item: any) => ({
            title: item.title,
            description: item.description || "",
            body: item.content || "",
            imageUrl: item.image || null,
            url: item.url,
            publishedAt: item.publishedAt,
            sourceName: item.source?.name,
          }))
        );
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const openUrl = (url: string) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.warn("Não foi possível abrir a URL:", url);
        }
      })
      .catch((err) => console.error("Erro ao abrir URL:", err));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#C6C8C7" />
        <Text style={styles.loadingText}>Carregando notícias...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={noticias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedNoticia(item)}
          >
            <Texto style={styles.titulo}>Notícias</Texto>
            {item.imageUrl && (
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {item.sourceName && (
              <Text style={styles.source}>Fonte: {item.sourceName}</Text>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Modal exibindo a notícia completa */}
      <Modal visible={!!selectedNoticia} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedNoticia(null)}
          >
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
          <ScrollView style={styles.modalContent}>
            {selectedNoticia?.imageUrl && (
              <Image
                source={{ uri: selectedNoticia.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
            <Text style={styles.title}>{selectedNoticia?.title}</Text>
            <Text style={styles.description}>{selectedNoticia?.description}</Text>
            <Text style={styles.body}>{selectedNoticia?.body}</Text>
            {selectedNoticia?.publishedAt && (
              <Text style={styles.published}>
                Publicado em: {new Date(selectedNoticia.publishedAt).toLocaleString()}
              </Text>
            )}
            {selectedNoticia?.sourceName && (
              <Text style={styles.source}>Fonte: {selectedNoticia.sourceName}</Text>
            )}
            {selectedNoticia?.url && (
              <TouchableOpacity
                style={styles.urlButton}
                onPress={() => openUrl(selectedNoticia.url!)}
              >
                <Text style={styles.urlText}>Abrir no navegador</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252728",
    padding: 10,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 34,
    textAlign: "center",
    color: "white",
    paddingBottom: 10,
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
    height: 200,
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
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#C6C8C7",
    marginTop: 10,
  },
  source: {
    fontSize: 12,
    color: "#C6C8C7",
    fontStyle: "italic",
    marginTop: 5,
  },
  published: {
    fontSize: 12,
    color: "#C6C8C7",
    marginTop: 5,
  },
  urlButton: {
    backgroundColor: "#085A8C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  urlText: {
    color: "#FFF",
    fontWeight: "bold",
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
  modalContainer: {
    flex: 1,
    backgroundColor: "#252728",
  },
  modalContent: {
    padding: 15,
  },
  closeButton: {
    backgroundColor: "#085A8C",
    padding: 12,
    alignItems: "center",
  },
  closeText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});