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
                        texto: "e-Platform 3.0 ",
                    },
                ],
            },
            {
                id: 2,
                nome: "BYD Dolphin",
                descricao: "Por apenas R$ 159.800,00",
                imagem: require('../../assets/produtos/dolphin.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/dolphin/45.jpg'),
                        texto: "Divertido, Pop e 100% elétrico",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/traseira.jpg'),
                        texto: "Design Oceânico",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/painel.jpg'),
                        texto: "Painel Multimídia",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/tela.jpg'),
                        texto: "Tela touchscreen rotativa",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/controle.jpg'),
                        texto: "Teclas de controle",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/banco_traseiro.jpg'),
                        texto: "Espaço confortável",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/macaneta.jpg'),
                        texto: "Maçanetas em formato de nadadeiras",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin/assento.jpg'),
                        texto: "Assentos com tecidos ventilados",
                    },
                    {
                        imagem: require('../../assets/produtos/mini_dolphin/plataforma.webp'),
                        texto: "e-Platform 3.0 ",
                    },
                ],
            },
            {
                id: 3,
                nome: "BYD Dolphin Plus",
                descricao: "Por apenas R$ 184.800,00",
                imagem: require('../../assets/produtos/dolphin_plus.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/design.jpg'),
                        texto: "Design Oceânico",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/luzes.jpg'),
                        texto: "Novo Design das Luzes",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/console.jpg'),
                        texto: "Console Central Flutuante",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/tela.jpg'),
                        texto: "Tela rotativa de 12,8 polegadas",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/porta_malas.jpg'),
                        texto: "Grande espaço no porta-malas",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/assento.jpg'),
                        texto: "Assentos de couro vegano sustentáveis",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/banco_traseiro.jpg'),
                        texto: "Espaço confortável",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/espaco_interno.jpg'),
                        texto: "Mais espaço de armazenamento",
                    },
                    {
                        imagem: require('../../assets/produtos/dolphin_plus/teto_solar.jpg'),
                        texto: "Teto solar panorâmico",
                    },
                ],
            },
            {
                id: 4,
                nome: "BYD Yuan Pro",
                descricao: "Por apenas R$ 182.800,00",
                imagem: require('../../assets/produtos/yuan_pro.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/yuan_pro/45.jpg'),
                        texto: "Dimensões que surpreendem",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/superior.jpg'),
                        texto: "Atraente, seguro e fácil de dirigir",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/lateral.jpg'),
                        texto: "Design da Dinastia BYD",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/yuan_pro/iluminacao.jpg'),
                        texto: "Iluminação traseira Led",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/interior.jpg'),
                        texto: "Interior elegante e funcional",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/inducao.jpg'),
                        texto: "Recarga inteligente",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/espaco_interno.jpg'),
                        texto: "Amplo espaço",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/interior_lateral.jpg'),
                        texto: "Cabine ergonomicamente projetada",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_pro/carroceria.jpg'),
                        texto: "Carroceria de alta resistência",
                    },
                ],
            },
            {
                id: 5,
                nome: "BYD Yuan Plus",
                descricao: "Por apenas R$ 235.800,00",
                imagem: require('../../assets/produtos/yuan_plus.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/yuan_plus/frente.jpg'),
                        texto: "BYD Yuan Plus: Para ver o futuro",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/lateral.jpg'),
                        texto: "Visual arrojado para o seu estilo de vida",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/interior.jpg'),
                        texto: "Perfeito para a sua diversão",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/yuan_plus/conforto.jpg'),
                        texto: "Conforto em todas as viagens",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/console.jpg'),
                        texto: "Console",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/teto_solar.jpg'),
                        texto: "Teto solar panorâmico",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/45.jpg'),
                        texto: "Prepare-se para ficar impressionado",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/tela.jpg'),
                        texto: "Fique conectado",
                    },
                    {
                        imagem: require('../../assets/produtos/yuan_plus/superior.jpg'),
                        texto: "Domine cada movimento",
                    },
                ],
            },
            {
                id: 6,
                nome: "BYD Seal",
                descricao: "Por apenas R$ 299.800,00",
                imagem: require('../../assets/produtos/seal.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/seal/frente.jpg'),
                        texto: "O Sedã Elétrico que Une Potência, Tecnologia e Sustentabilidade",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/lateral.jpg'),
                        texto: "Design Esportivo \"Golden Ratio\"",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/farol.jpg'),
                        texto: "Faróis flutuantes em duplo U",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/seal/roda.jpg'),
                        texto: "Roda Blade Precision（AWD）",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/traseira.jpg'),
                        texto: "Lanterna traseira do tipo Skyline",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/painel.jpg'),
                        texto: "Cockpit inteligente e confortável",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/tela.jpg'),
                        texto: "Sistema de cockpit inteligente BYD",
                    },
                    {
                        imagem: require('../../assets/produtos/seal/banco.jpg'),
                        texto: "Interior sofisticado de alta qualidade",
                    },
                ],
            },
            {
                id: 7,
                nome: "BYD Tan",
                descricao: "Por apenas R$ 536.800,00",
                imagem: require('../../assets/produtos/tan.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/tan/lateral.jpg'),
                        texto: "SUV 100% elétrico de 7 lugares",
                    },
                    {
                        imagem: require('../../assets/produtos/tan/geral.png'),
                        texto: "Conforto, Elegância e Performance",
                    },
                    {
                        imagem: require('../../assets/produtos/tan/45.jpg'),
                        texto: "0 a 100 em 4,9 segundos",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/tan/interior.jpg'),
                        texto: "Interior e Multimídia",
                    },
                    {
                        imagem: require('../../assets/produtos/tan/tela.jpg'),
                        texto: "Tela flutuante rotativa de 15,6“",
                    },
                ],
            },
            {
                id: 8,
                nome: "BYD Han",
                descricao: "Por apenas R$ 559.800,00",
                imagem: require('../../assets/produtos/han.webp'),
                slider: [
                    {
                        imagem: require('../../assets/produtos/han/lateral.jpg'),
                        texto: "Explore Power",
                    },
                    {
                        imagem: require('../../assets/produtos/han/lateral1.jpg'),
                        texto: "0-100 km/h em apenas 3,9s",
                    },
                    {
                        imagem: require('../../assets/produtos/han/lado.jpg'),
                        texto: "Equilíbrio perfeito entre arte e tecnologia",
                    },
                    
                    {
                        imagem: require('../../assets/produtos/han/farol.jpg'),
                        texto: "Faróis de LED com design Dragon Face",
                    },
                    {
                        imagem: require('../../assets/produtos/han/roda.jpg'),
                        texto: "Rodas Esportivas Dinâmicas",
                    },
                    {
                        imagem: require('../../assets/produtos/han/interior.jpg'),
                        texto: "Acesse tudo com o toque de um dedo",
                    },
                    {
                        imagem: require('../../assets/produtos/han/banco.jpg'),
                        texto: "Banco traseiro luxuoso",
                    },
                    {
                        imagem: require('../../assets/produtos/han/frente.jpg'),
                        texto: "Controle e total segurança",
                    },
                ],
            }
        ]
    }
}
export default lista_produto;