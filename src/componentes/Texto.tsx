import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}: any){
    return <Text style = {[estilos.padrao, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao : {
        fontFamily: "FonteRegular",
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