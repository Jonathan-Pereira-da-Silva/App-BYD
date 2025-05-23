import { StyleSheet } from "react-native";

const estilosPerfil = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252728',
},
cardContainer: {
    marginTop: 20,
    backgroundColor: '#C6C8C7',
    width: '90%',
    alignSelf: 'center',
},
logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    margin: -80,
},
fotoTiradaContainer: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: '10',
    marginBottom: 10,
},
camera: {
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: '10',
    margin: 20,
},
cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
},
cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
},
cameraBotao: {
    position: 'absolute',
    bottom: 10,
    right: 20,
},
cameraTexto: {
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    alignContent: 'center',
},
text: {
    fontSize: 16,
    marginLeft: 10,
    color: "#252728",
},
input: {
    width: '70%',
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
    borderRadius: 2,
},
fotoTirada: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    borderRadius: '10',
},
message: {
    textAlign: 'center',
    paddingBottom: 10,
},
buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
},
button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
},
});

export default estilosPerfil;
