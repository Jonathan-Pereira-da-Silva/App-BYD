import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    cardContainer: {
        backgroundColor: "#252728",
    },
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 15,
        color: "#C6C8C7",
    },
    imagem:{
        maxWidth: 400,
        height: 100,
    },
})

export default styles;