import React from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { TouchableOpacity, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAudioPlayer } from 'expo-audio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreNos from "./src/telas/SobreNos";
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/listaProduto";
import ListaDeDesejos from "./src/telas/ListaDeDesejos";
import Perfil from "./src/telas/Perfil";
import Noticias from "./src/telas/noticias";
import Styles from "./src/telas/estiloGeral";
import { ListaDesejosProvider } from "./src/telas/ListaDeDesejos/Context";

import Texto from "./src/componentes/Texto";
import ProdutosStack from "./src/navigation/ProdutosStack";

function MenuProdutos() {
    return <Produto {...MockProdutos} />;
}

function ListaDeDesejosScreen() {
    return <ListaDeDesejos />;
}

function ListaProdutosScreen() {
  return <ProdutosStack />;
}

function MenuAudio(){
    const audioSource = require('./assets/acdc_highway_to_hell.mp3');
    const player = useAudioPlayer(audioSource);

    const onOff = () => {
        if (player.playing) {
            player.pause();
        } else {
            if (player.currentTime >= player.duration) {
                player.seekTo(0);
            }
            player.play();
        }
    };

    return (
        <TouchableOpacity onPress={onOff}>
            <Texto style={Styles.botaoAudio}>🎧On/Off</Texto>
        </TouchableOpacity>
    );
}

const Tab = createBottomTabNavigator();

function Menu() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "home";

                    if (route.name === "Sobre Nós") iconName = focused ? "home" : "home-outline";
                    if (route.name === "Produtos (Local)") iconName = focused ? "car-sport" : "car-sport-outline";
                    if (route.name === "Lista de Desejos") iconName = focused ? "list" : "list-outline";
                    if (route.name === "Perfil") iconName = focused ? "person-circle" : "person-circle-outline";
                    if (route.name === "Notícias") iconName = focused ? "newspaper" : "newspaper-outline";
                    if (route.name === "Produtos (BD)") iconName = focused ? "server" : "server-outline";

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#252728',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#f8f9fa',
                    borderTopWidth: 1,
                    borderTopColor: '#e9ecef',
                },
            })}
        >
            <Tab.Screen 
                name="Sobre Nós" 
                component={SobreNos}
                options={{ title: 'Sobre Nós' }}
            />
            <Tab.Screen 
                name="Produtos (Local)" 
                component={MenuProdutos}
                options={{ title: 'Produtos' }}
            />
            <Tab.Screen 
                name="Lista de Desejos" 
                component={ListaDeDesejosScreen}
                options={{ title: 'Desejos' }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil}
                options={{ title: 'Perfil' }}
            />
            <Tab.Screen 
                name="Notícias" 
                component={Noticias}
                options={{ title: 'Notícias' }}
            />
            <Tab.Screen 
                name="Produtos (BD)" 
                component={ListaProdutosScreen}
                options={{ title: 'Admin' }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [fonteCarregada, fontError] = useFonts({
        "FonteRegular": Montserrat_400Regular,
        "FonteNegrito": Montserrat_700Bold,
    });

    if (!fonteCarregada) {
        if (fontError) {
            console.error('Erro ao carregar fontes:', fontError);
        }
        return <View style={{ flex: 1, backgroundColor: '#252728' }} />;
    }

    return (
        <NavigationContainer>
            <ListaDesejosProvider>
                <View style={{ flex: 1 }}>
                    <Menu />
                    <MenuAudio/>
                </View>
            </ListaDesejosProvider>
        </NavigationContainer>
    );
}