import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}: any){
    let estilo = estilos.padrao;
    if(style?.fontWeight == "bold"){
        estilo=estilos.bold;
    }
    if(style?.fontSize == 34){
        estilo=estilos.titulo;
    }
    return <Text style = {[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao : {
        fontFamily: "FonteRegular",
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 25,
    },
    bold : {
        fontFamily: "FonteNegrito",
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 25,
    },
    titulo : {
        fontFamily: "Titulo",
        textAlign: "justify",
        fontSize: 34,
        lineHeight: 40,
    }
});