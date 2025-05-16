import { useVideoPlayer, VideoView } from "expo-video";
const lista_produto = {
    itens: {
        titulo: "Veja abaixo nossos produtos",
        lista: [
            {
                id: 1,
                nome: "BYD Dolphin Mini",
                descricao: "Por apenas R$ 118.800,00",
                imagem: require('../../assets/produtos/mini.jpg'),
                slider: [
                    require('../../assets/produtos/mini.jpg'),
                    require('../../assets/produtos/mini.jpg'),
                    require('../../assets/produtos/mini.jpg'),
                ],
            },
            {
                id: 2,
                nome: "BYD Dolphin",
                descricao: "Por apenas R$ 159.800,00",
                imagem: require('../../assets/produtos/dolphin.webp'),
                slider: [
                    require('../../assets/produtos/dolphin.webp'),
                    require('../../assets/produtos/dolphin.webp'),
                    require('../../assets/produtos/dolphin.webp'),
                ],
            },
            {
                id: 3,
                nome: "BYD Dolphin Plus",
                descricao: "Por apenas R$ 184.800,00",
                imagem: require('../../assets/produtos/dolphin_plus.webp'),
                slider: [
                    require('../../assets/produtos/dolphin_plus.webp'),
                    require('../../assets/produtos/dolphin_plus.webp'),
                    require('../../assets/produtos/dolphin_plus.webp'),
                ],
            },
            {
                id: 4,
                nome: "BYD Yuan Pro",
                descricao: "Por apenas R$ 182.800,00",
                imagem: require('../../assets/produtos/yuan_pro.webp'),
                slider: [
                    require('../../assets/produtos/yuan_pro.webp'),
                    require('../../assets/produtos/yuan_pro.webp'),
                    require('../../assets/produtos/yuan_pro.webp'),
                ],
            },
            {
                id: 5,
                nome: "BYD Yuan Plus",
                descricao: "Por apenas R$ 235.800,00",
                imagem: require('../../assets/produtos/yuan_plus.webp'),
                slider: [
                    require('../../assets/produtos/yuan_plus.webp'),
                    require('../../assets/produtos/yuan_plus.webp'),
                    require('../../assets/produtos/yuan_plus.webp'),
                ],
            },
            {
                id: 6,
                nome: "BYD Seal",
                descricao: "Por apenas R$ 299.800,00",
                imagem: require('../../assets/produtos/seal.webp'),
                slider: [
                    require('../../assets/produtos/seal.webp'),
                    require('../../assets/produtos/seal.webp'),
                    require('../../assets/produtos/seal.webp'),
                ],
            },
            {
                id: 7,
                nome: "BYD Tan",
                descricao: "Por apenas R$ 536.800,00",
                imagem: require('../../assets/produtos/tan.webp'),
                slider: [
                    require('../../assets/produtos/tan.webp'),
                    require('../../assets/produtos/tan.webp'),
                    require('../../assets/produtos/tan.webp'),
                ],
            },
            {
                id: 8,
                nome: "BYD Han",
                descricao: "Por apenas R$ 559.800,00",
                imagem: require('../../assets/produtos/han.webp'),
                slider: [
                    require('../../assets/produtos/han.webp'),
                    require('../../assets/produtos/han.webp'),
                    require('../../assets/produtos/han.webp'),
                ],
            }
        ]
    }
}
export default lista_produto;