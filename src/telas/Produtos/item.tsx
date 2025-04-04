import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import Texto from "../../componentes/Texto";
export default function Item({item:{id, nome, descricao, imagem}}:any){
    return <View>
        <Card mode="elevated">
            <Card.Content>
                <Texto>{nome}</Texto>
                <Texto>{descricao}</Texto>
            </Card.Content>
            <Card.Cover source={imagem}/>  
        </Card>
    </View>
}