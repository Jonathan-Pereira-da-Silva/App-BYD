import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos() {

    // Indica o video e coloca ele em loop
    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

    return <ScrollView style={estilos.fundo}>
        <StatusBar /> 
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain" />
        <Texto style={estilos}>Conheça a nossa história</Texto>
        <Texto style={estilos.texto_sobre}>A hamburgueria ....... existe desde 19** e mantém sua tradição nos hamburguers até hoje.</Texto>
        <Image source={require('../../assets/hamberger.png')} style={estilos.img_sobre} resizeMode="contain"></Image>
        <VideoView player = {player} style = {estilos.video} allowsFullscreen allowsPictureInPicture/>
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
    },
    texto_sobre:{
        color: "white",
        fontWeight: "bold"

    },
    titulo:{
        fontSize: 34,
    },
    img_sobre:{
        height: 400,
        alignSelf: "center",
    },
    video:{
        width: 350,
        height:275,
        alignSelf: "center",
        marginBottom: 30,
    }
})