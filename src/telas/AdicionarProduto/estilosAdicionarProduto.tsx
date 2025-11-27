import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252728",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  botaoImagem: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  botaoSalvar: {
    backgroundColor: "#32CD32",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  preview: {
    width: "100%",
    height: 240,
    resizeMode: "contain",
    marginTop: 15,
    borderRadius: 8,
  },
});