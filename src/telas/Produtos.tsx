import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos() {

    // Indica o video e coloca ele em loop
    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')

    return <ScrollView style={estilos.fundo}>
        <StatusBar /> 
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain" />
        <Texto style={estilos.texto_sobre}>Nossos Produtos</Texto>
        <Image source={require('../../assets/hamberger.png')} style={estilos.img_sobre} resizeMode="contain"></Image>
        <Texto style={estilos.texto_sobre}>X-Tudo </Texto>
        <Image source={require('../../assets/hamberger.png')} style={estilos.img_sobre} resizeMode="contain"></Image>
        <Texto style={estilos.texto_sobre}>X-Tudo </Texto>
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "purple",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 30,
    },
    texto_sobre:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    titulo:{
        fontSize: 34,
    },
    img_sobre:{
        height: 400,
        alignSelf: "center",
    }
})