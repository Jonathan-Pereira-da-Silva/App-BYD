
import React, {useState} from "react";
import {Card} from 'react-native-paper';
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/Texto'
import estilosPerfil from './estilosPerfil'

export default function Index(){
    
    const[facing, setFacing] = useState<CameraType>('back');
    const[permission, requestPermission] = useCameraPermissions();
    
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

    return <View style={estilosPerfil.container}>
        <Image source={require('../../../assets/logo/logo.png')} style={estilosPerfil.logo} resizeMode="contain" />
        <CameraView facing={facing} style={estilosPerfil.camera}>
            <View style={estilosPerfil.cameraContainer}>
                <TouchableOpacity style={estilosPerfil.cameraVirarBotao} onPress={toggleCameraFacing}>
                    <Ionicons name="reload" size={30} color="#C6C8C7"></Ionicons>
                </TouchableOpacity>
            </View>
        </CameraView>
        <Card mode='elevated' style={estilosPerfil.cardContainer}>
            <Card.Content>
                <Texto style={estilosPerfil.text}>Nome completo</Texto>
                <TextInput style={estilosPerfil.input} placeholder="Digite seu Nome"/>
                
                <Texto style={estilosPerfil.text}>E-Mail</Texto>
                <TextInput style={estilosPerfil.input} placeholder="Digite seu E-mail"/>

                <Texto style={estilosPerfil.text}>WhatsApp</Texto>
                <TextInput style={estilosPerfil.input} placeholder="Digite seu Whatsapp" keyboardType="numeric"/>
            </Card.Content>
        </Card>
    </View>
}
