import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Texto from "../../componentes/Texto";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListaDesejosContext } from "../../../App";

export default function ItemDesejo({ item: { id, nome, descricao, imagem } }: any) {
    const { removerDesejo } = useContext(ListaDesejosContext);

    const handleRemoverDesejo = () => {
        removerDesejo(id);
    };

    return (
        <View style={estilos.container}>
            <Card mode="elevated">
                <Card.Content style={estilos.fundo}>
                    <View style={estilos.headerCard}>
                        <Texto style={estilos.titulo}>{nome}</Texto>
                        <TouchableOpacity onPress={handleRemoverDesejo}>
                            <Ionicons name="heart-dislike-outline" size={24} color="#ff6347" />
                        </TouchableOpacity>
                    </View>
                    <Texto style={estilos.texto_item}>{descricao}</Texto>
                </Card.Content>
                <Card.Cover source={imagem} />
            </Card>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    fundo: {
        backgroundColor: "#252728",
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10, // Adicione um pouco de espaço abaixo do header
    },
    texto_item: {
        color: "#C6C8C7",
        fontSize: 18,
        marginBottom: 16
    },
    titulo: {
        fontSize: 25,
        color: "#C6C8C7",
        flexShrink: 1, // Para que o título não quebre a linha inesperadamente
    },
});