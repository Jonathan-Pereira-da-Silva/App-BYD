
import React, {useEffect, useState} from "react";
import {Card} from 'react-native-paper';
import { View, TextInput, TouchableOpacity, Image, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto'
import estilosPerfil from './estilosPerfil'

export default function Index(){
    
    const[facing, setFacing] = useState<CameraType>('back');
    const[permission, requestPermission] = useCameraPermissions();
    
    // Campos do formulário
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');

    // Carrega os dados do Perfil
    useEffect(()=>{
        async function carregarPerfil(){
            const perfilSalvo = await AsyncStorage.getItem('Perfil')
            if(perfilSalvo){
                const perfil = JSON.parse(perfilSalvo)
                setNome(perfil.nome)
                setEmail(perfil.email)
                setWhatsapp(perfil.whatsapp)
            }
        }
        carregarPerfil()
    }, [])

    //Se as permissões da câmera ainda estiverem carregando, exibe uma view vazia
    if(!permission) {
        return <View/>;
    }

    //Solicita permissões da câmera
    if(!permission.granted){
        return <View style={estilosPerfil.container}>
                    <Texto style={estilosPerfil.message}>Precisamos da sua autorização para exibir a câmera</Texto>
                    <TouchableOpacity onPress={requestPermission}>
                        <Texto>Permitir</Texto>
                    </TouchableOpacity>
                </View>
    }

    //Faz a troca da câmera
    function toggleCameraFacing(){
        setFacing(current=>(current === 'back' ? 'front' : 'back'));
    }

    // Função para salvar os dados do perfil
    async function salvarPerfil(){
        const perfil = {nome, email, whatsapp}
        await AsyncStorage.setItem('Perfil', JSON.stringify(perfil))
        Alert.alert('Perfil salvo com sucesso!')
        console.log(perfil)
    }

    return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={[{flexGrow: 1},estilosPerfil.container]}>
            <Image 
                source={require('../../../assets/logo/logo.png')} 
                style={estilosPerfil.logo} 
                resizeMode="contain" 
            />

            <View style={{ position: 'relative' }}>
                <CameraView 
                    facing={facing} 
                    style={estilosPerfil.camera} 
                />

                {/* Botão sobreposto */}
                <TouchableOpacity 
                    style={[estilosPerfil.cameraVirarBotao, { position: 'absolute', bottom: -8, right: 20 }]} 
                    onPress={toggleCameraFacing}
                >
                    <Ionicons name="reload" size={30} color="#C6C8C7" />
                </TouchableOpacity>
            </View>

            <Card mode='elevated' style={estilosPerfil.cardContainer}>
                <Card.Content>
                    <Texto style={estilosPerfil.text}>Nome completo</Texto>
                    <TextInput style={estilosPerfil.input} value={nome} onChangeText={setNome}/>
                    
                    <Texto style={estilosPerfil.text}>E-Mail</Texto>
                    <TextInput style={estilosPerfil.input} value={email} onChangeText={setEmail}/>

                    <Texto style={estilosPerfil.text}>WhatsApp</Texto>
                    <TextInput style={estilosPerfil.input} value={whatsapp} onChangeText={setWhatsapp}/>
                </Card.Content>
                <Card.Actions>
                    <TouchableOpacity style={estilosPerfil.botao} onPress={salvarPerfil}>
                        <Texto style={estilosPerfil.textoBotao}>
                            <Ionicons name="save" size={20} color="#C6C8C7"/>Salvar Dados
                        </Texto>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>
        </ScrollView>
    </KeyboardAvoidingView>
);
}
