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
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/frente.webp'),
                        texto: "O Novo Membro da Família Dolphin",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/45.webp'),
                        texto: "Economia e Comodidade",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/lado.webp'),
                        texto: "Segurança",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/airbags.jpg'),
                        texto: "6 Airbags",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/interior.webp'),
                        texto: "Tela Giratória de 10.1’’",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/indução.jpg'),
                        texto: "Carregador por Indução",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/controle.jpg'),
                        texto: "Teclas de Controle",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/plataforma.webp'),
                        texto: "e-Platform 3.0",
                    },
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