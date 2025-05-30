import React, { useState, createContext } from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreNos from "./src/telas/SobreNos";
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/listaProduto";
import ListaDeDesejos from "./src/telas/ListaDeDesejos";
import Perfil from "./src/telas/Perfil";

// Criação do contexto da lista de desejos
export const ListaDesejosContext = createContext<{
    listaDesejos: number[];
    adicionarDesejo: (id: number) => void;
    removerDesejo: (id: number) => void;
}>({
    listaDesejos: [],
    adicionarDesejo: () => {},
    removerDesejo: () => {},
});

function MenuProdutos() {
    return <Produto {...MockProdutos} />;
}

function ListaDeDesejosScreen() {
    return <ListaDeDesejos />;
}

// Configuração do Menu
const Tab = createBottomTabNavigator();
function Menu() {
    const [listaDesejos, setListaDesejos] = useState<number[]>([]);

    const adicionarDesejo = (id: number) => {
        if (!listaDesejos.includes(id)) {
            setListaDesejos([...listaDesejos, id]);
        }
    };

    const removerDesejo = (id: number) => {
        setListaDesejos(listaDesejos.filter(itemId => itemId !== id));
    };

    return (
        <ListaDesejosContext.Provider value={{ listaDesejos, adicionarDesejo, removerDesejo }}>
            <Tab.Navigator
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
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </ListaDesejosContext.Provider>
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
            <Menu />
        </NavigationContainer>
    );
}