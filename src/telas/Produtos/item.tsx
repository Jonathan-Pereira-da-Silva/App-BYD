import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-paper";
import Texto from "../../componentes/Texto";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PagerView from "react-native-pager-view";
import { ListaDesejosContext } from "../../../App";

export default function Item({ item: { id, nome, descricao, imagem, slider } }: any) {
    const { listaDesejos, adicionarDesejo, removerDesejo } = useContext(ListaDesejosContext);
    const [isDesejado, setIsDesejado] = useState(false);
    const [statusModal, acaoAbreFecha] = useState(false);

    useEffect(() => {
        setIsDesejado(listaDesejos.includes(id));
    }, [listaDesejos, id]);

    const handleAdicionarRemoverDesejo = () => {
        if (isDesejado) {
            removerDesejo(id);
        } else {
            adicionarDesejo(id);
        }
        setIsDesejado(!isDesejado);
    };

    return (
        <View>
            <Card mode="elevated">
                <Card.Content style={estilos.fundo}>
                    <View style={estilos.headerCard}>
                        <View>
                            <Texto style={estilos.titulo}>{nome}</Texto>
                            <Texto style={estilos.texto_item}>{descricao}</Texto>
                        </View>
                        <View style={estilos.viewIcons}>
                            <TouchableOpacity onPress={handleAdicionarRemoverDesejo}>
                                <Ionicons
                                    name={isDesejado ? "heart" : "heart-outline"}
                                    size={24}
                                    color={isDesejado ? "#FF0000" : "#C6C8C7"}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>acaoAbreFecha(true)}>
                                <Ionicons 
                                    name="list"
                                    size={24}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card.Content>
                <Card.Cover style={estilos.imagem} source={imagem} />
            </Card>
            <Modal animationType="fade" transparent={true} visible={statusModal}>
                <View style={estilos.modalContainer}>
                    <View style={estilos.modal}>
                        <Texto style={estilos.nomeProduto}>{nome}</Texto>
                        <Texto style={estilos.descProduto}>{descricao}</Texto>
                        <PagerView initialPage={0} style={estilos.slider}>
                            {/*<Image source={imagem} style={estilosTelaProduto.imagemModalTelaProduto} resizeMode="contain" />*/
                            slider.map((img:any, index:any)=> (
                                <View key={index}>
                                    <Image source={img} style={estilos.imagemModal} resizeMode="contain"/>
                                </View>
                            ))}
                        </PagerView>
                        <TouchableOpacity style={estilos.botao} onPress={()=>acaoAbreFecha(false)}>
                            <Ionicons name="close" size={30} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#252728",
    },
    headerCard: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    viewIcons: {
        width: 22,
    },
    texto_item: {
        color: "#C6C8C7",
        fontSize: 18,        
    },
    titulo: {
        fontSize: 25,
        color: "#C6C8C7",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#000000",
        borderRadius: 50,
    },
    nomeProduto: {
        color: "#C6C8C7",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    descProduto: {
        color: "#C6C8C7",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    imagemModal: {
        maxWidth: 400,
        height: 300,
    },
    imagem:{
        maxWidth: 400,
        height: 200,
    },
    slider: {
        width: 400,
        height: 320,
        justifyContent: "center",
        alignItems: "center",
    },
    botao: {
        left: 180,
        bottom: 20
    },
});