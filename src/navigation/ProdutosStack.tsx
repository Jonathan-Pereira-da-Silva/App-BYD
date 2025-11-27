// src/navigation/ProdutosStack.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProdutosStackParamList } from "./tiposProdutosStack"; // <-- Importe o tipo

import ListaProdutos from "../telas/ListaProdutos";
import AdicionarProduto from "../telas/AdicionarProduto";
import EditarProduto from "../telas/EditarProduto";

// Aplique o tipo ProdutosStackParamList ao createStackNavigator
// Isso garante que todas as telas dentro desta Stack usem a tipagem correta.
const Stack = createStackNavigator<ProdutosStackParamList>();

export default function ProdutosStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListaProdutos" component={ListaProdutos} />
      <Stack.Screen name="AdicionarProduto" component={AdicionarProduto} />
      {/* A tela EditarProduto agora sabe que o parâmetro 'produto' é esperado.
        (Não precisamos mudar mais nada aqui, mas a tipagem é crucial).
      */}
      <Stack.Screen name="EditarProduto" component={EditarProduto} />
    </Stack.Navigator>
  );
}