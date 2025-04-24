import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import Texto from "../../componentes/Texto";
import { ListaDesejosContext } from "../../../App";
import MockProdutos from "../../mocks/listaProduto";
import ItemDesejo from "./itemDesejo";

export default function ListaDeDesejos() {
    const { listaDesejos } = useContext(ListaDesejosContext);
    const { itens } = MockProdutos;
    const produtosDesejados = itens.lista.filter(produto => listaDesejos.includes(produto.id));

    if (produtosDesejados.length === 0) {
        return (
            <View style={estilos.containerVazio}>
                <Image source={require('../../../assets/logo/logo.png')} style={estilos.logo} resizeMode="contain" />
                <Texto style={estilos.textoVazio}>Sua lista de desejos está vazia.</Texto>
            </View>
        );
    }

    return (
        <View style={estilos.container}>
            <Image source={require('../../../assets/logo/logo.png')} style={estilos.logo} resizeMode="contain" />
            <FlatList
                data={produtosDesejados}
                renderItem={({ item }) => <ItemDesejo item={item} />}
                keyExtractor={(item) => item.nome}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252728",
        paddingVertical: 12,
        paddingHorizontal: 16,
        paddingBottom: 0,
    },
    containerVazio: {
        flex: 1,
        backgroundColor: "#252728",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
        margin: -80,
    },
    textoVazio: {
        color: "#C6C8C7",
        fontSize: 18,
        marginTop: 20,
    },
});