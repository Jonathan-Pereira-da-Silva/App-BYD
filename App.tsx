import React from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import SobreNos from "./src/telas/SobreNos"; 

export default function App() {
  // Configuração da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular, "FonteNegrito": Montserrat_700Bold});
  const [titulo] = useFonts({"Titulo": require('./assets/Honk-Regular-VariableFont_MORF,SHLN.ttf')})
  // Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }
  if(!titulo){
    return <View/>
  }
  return <SobreNos/>
}