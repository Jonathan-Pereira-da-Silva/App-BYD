import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos() {

    // Indica o video e coloca ele em loop
    const player = useVideoPlayer(require('../../assets/video.mp4'));

    return <ScrollView style={estilos.fundo}>
        <StatusBar /> 
        <Image source={require('../../assets/logo/logo.png')} style={estilos.logo} resizeMode="contain" />
        <Texto style={estilos.texto_sobre}>Fundada em 1995, a BYD é uma empresa líder em tecnologia dedicada a alavancar inovações para uma vida melhor. 
            Com mais de 28 anos de experiência, a BYD se estabeleceu como líder do setor de eletrônicos, automotivo, energia renovável e transporte ferroviário. 
            Como líder global com mais de 30 parques industriais em 6 continentes, as soluções de emissão zero da BYD, focadas na geração e armazenamento de energia, são expansivas e amplamente aplicáveis.</Texto>
        <Image source={require('../../assets/sobre.webp')} style={estilos.img_sobre}></Image>
        <VideoView player = {player} style = {estilos.video} allowsFullscreen allowsPictureInPicture/>
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#252728",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
        margin: -30,
    },
    texto_sobre:{
        color: "#C6C8C7",
        fontWeight: "bold",
        marginBottom: 40,
    },
    titulo:{
        fontSize: 34,
    },
    img_sobre:{
        height: 300,
        width: 400,
        alignSelf: "center", 
        borderRadius: 20,  
        marginBottom: 30,
    },
    video:{
        width: 400,
        height: 275,
        alignSelf: "center",
        marginBottom: 30,
    }
})