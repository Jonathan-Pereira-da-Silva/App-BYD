import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 2 - 20;

const styles=StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#252728",
        paddingTop: 50,
    },
    tituloHeader: {
        fontSize: 25,
        color: "#C6C8C7",
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    lista: {
        paddingHorizontal: 5,
        paddingBottom: 20,
    },
    cardContainer: {
        width: cardWidth,
        margin: 5,
    },
    card: {
        backgroundColor: "#000000",
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        height: 280, // Aumentei a altura do card para acomodar a imagem maior
        justifyContent: 'space-around',
    },
    titulo: {
        fontSize: 14,
        color: "#C6C8C7",
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 5,
    },
    valor: {
        fontSize: 16,
        color: "#C6C8C7",
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 5,
    },
    imagem:{
        width: '141%',
        height: 150, // Aumentei a altura da imagem
        resizeMode: 'contain',
        //marginBottom: 5,
        alignSelf: 'center'
    },
    // Novos estilos para o Modal
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Fundo preto semi-transparente para o modal
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: '100%',
        height: '80%', // Ocupa 80% da altura da tela para a imagem
        resizeMode: 'contain', // Garante que a imagem se ajuste sem cortar
    },
})

export default styles;