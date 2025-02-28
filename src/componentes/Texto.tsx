import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children}: any){
    return <Text style = {estilos.estilos_textos}>{children}</Text>
}

const estilos = StyleSheet.create({
    estilos_textos : {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Arial",
    }
});