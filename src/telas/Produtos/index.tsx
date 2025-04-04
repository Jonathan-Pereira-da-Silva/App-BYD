import React from "react";
import { FlatList } from "react-native";
import Item from "./item";
export default function Index({itens}:any){
    return <FlatList 
                data = {itens.lista}
                renderItem = {({item}) => <Item item={item}/>}
                keyExtractor = {(item)=>item.nome}
            />
}