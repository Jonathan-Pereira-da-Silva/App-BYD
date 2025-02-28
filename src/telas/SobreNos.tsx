import React from "react";
import { StatusBar, StyleSheet, View, Image } from "react-native";
import Texto from "../componentes/Texto";

export default function SobreNos(){
    return <View style = {estilos.fundo}>
        <StatusBar/>
        <Image source={require('../../logo.png')} style = {estilos.logo} resizeMode="contain"/>
        <Texto>Hamburgueria</Texto>
    </View>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "purple",
    },
    logo:{
        width: 200,
        height: 200,
        alignSelf: "center",
    }
})