const buscarProduto = document.querySelector('#buscar-produto');
const botaoBuscar = document.querySelector('#botao-buscar');
const botaoDeBusca = document.querySelectorAll('#botoes-busca');

const produtos = [
    {
        nome: 'boné verde',
        tipo: 'boné',
        preco: 19.99,
        imagem: 'img/bone-verde001.png'
    },
    {
        nome: 'calça jeans azul',
        tipo: 'calça',
        preco: 89.99,
        imagem: 'img/calca-jeans-azul001.png'
    },
    {
        nome: 'calça jeans preta',
        tipo: 'calça',
        preco: 89.99,
        imagem: 'img/calca-jeans-preta001.png' 
    },
    {
        nome: 'calça social azul',
        tipo: 'calça',
        preco: 119.99,
        imagem: 'img/calca-social-azul001.png'
    },
    {
        nome: 'calça social cinza',
        tipo: 'calça',
        preco: 119.99,
        imagem: 'img/calca-social-cinza001.png'
    },
    {
        nome: 'camisa listrada',
        tipo: 'camisa',
        preco: 69.99,
        imagem: 'img/camisa-listrada0001.png'
    },
    {
        nome: 'camisa xadrez',
        tipo: 'camisa',
        preco: 69.99,
        imagem: 'img/camisa-xadrez001.png'
    },
    {
        nome: 'camiseta bege',
        tipo: 'camiseta',
        preco: 44.99,
        imagem: 'img/camiseta-bege001.png'
    },
    {
        nome: 'camiseta cinza',
        tipo: 'camiseta',
        preco: 44.99,
        imagem: 'img/camiseta-cinza001.png'
    },
    {
        nome: 'jaqueta de couro marrom',
        tipo: 'jaqueta',
        preco: 104.99,
        imagem: 'img/jaqueta-couro-marrom001.png'
    },
    {
        nome: 'jaqueta de couro preta',
        tipo: 'jaqueta',
        preco: 104.99,
        imagem: 'img/jaqueta-couro-preta001.png'
    }
]