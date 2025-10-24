import React, { useState } from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAudioPlayer } from 'expo-audio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreNos from "./src/telas/SobreNos";
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/listaProduto";
import ListaDeDesejos from "./src/telas/ListaDeDesejos";
import ListaEncomendas from "./src/telas/ListaEncomendas";
import Perfil from "./src/telas/Perfil";
import Noticias from "./src/telas/noticias";
import Texto from "./src/componentes/Texto";
import Styles from "./src/telas/estiloGeral";
import ListaProdutos from "./src/telas/ListaProdutos";
import { ListaDesejosProvider } from "./src/telas/ListaDeDesejos/Context";

function MenuProdutos() {
    return <Produto {...MockProdutos} />;
}

function ListaDeDesejosScreen() {
    return <ListaDeDesejos />;
}

function ListaProdutosScreen() {
    return <ListaProdutos />;
}

function ListaEncomendasScreen() {
    return <ListaEncomendas {...MockProdutos}/>;
}

function MenuAudio(){
    const audioSource = require('./assets/acdc_highway_to_hell.mp3');
    const player = useAudioPlayer(audioSource);
    
    const onOff = () => {
        if (player.playing) {
            player.pause();
        } else {
            // Se o áudio terminou (currentTime >= duration), reiniciar
            if (player.currentTime >= player.duration) {
                player.seekTo(0);
            }
            player.play();
        }
    }

    return <TouchableOpacity onPress={onOff}>
        <Texto style={Styles.botaoAudio}>🎧On/Off</Texto>
    </TouchableOpacity>
}

// Configuração do Menu
const Tab = createBottomTabNavigator();
function Menu() {
    return (<Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string;
                        if (route.name === "Sobre Nós") {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === "Produtos") {
                            iconName = focused ? 'car-sport' : 'car-sport-outline';
                        } else if (route.name === "Lista de Desejos") {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (route.name === "Perfil") {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        } else if (route.name === "Notícias") {
                            iconName = focused ? "newspaper" : "newspaper-outline";
                        }else if (route.name === "Encomendas") {
                            iconName = focused ? "cart" : "cart-outline";
                        } else if (route.name === "Lista de Produtos") {
                            iconName = focused ? 'car-sport' : 'car-sport-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#252728',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Sobre Nós" component={SobreNos} />
                <Tab.Screen name="Produtos" component={MenuProdutos} />
                <Tab.Screen name="Lista de Desejos" component={ListaDeDesejosScreen} />
                <Tab.Screen name="Encomendas" component={ListaEncomendasScreen} />
                <Tab.Screen name="Perfil" component={Perfil} />
                <Tab.Screen name="Notícias" component={Noticias} />
                <Tab.Screen name="Lista de Produtos" component={ListaProdutosScreen} />
            </Tab.Navigator>
    );
}

export default function App() {
    // Configuração da fonte para o app
    const [fonteCarregada] = useFonts({ "FonteRegular": Montserrat_400Regular, "FonteNegrito": Montserrat_700Bold });
    // Verifica se a fonte foi carregada, se não, não exibe nada
    if (!fonteCarregada) {
        return <View />;
    }
    return (
        <NavigationContainer>
            <ListaDesejosProvider>
                <Menu />
            </ListaDesejosProvider>
            <MenuAudio/>
        </NavigationContainer>
    );
}