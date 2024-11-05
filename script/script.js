const buscarProduto = document.querySelector('#buscar-produto');
const botaoBuscar = document.querySelector('#botao-buscar');
const botaoDeBusca = document.querySelectorAll('#botoes-busca');
const opcoesBusca = document.querySelector('#opcoes-busca');
const produtos = document.querySelector('#produtos');

const listaDeProdutos = [
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
        imagem: 'img/camisa-listrada001.png'
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

    function exibirProdutos() {
        listaDeProdutos.forEach((produto, index) => {
            const cartaoProduto = document.createElement('div');
            cartaoProduto.classList.add('cartao-produto');
            cartaoProduto.id = `cartao0${index}`
            const imagemDoProduto = document.createElement('img');
            imagemDoProduto.src = produto.imagem;
            const nomeDoProduto = document.createElement('h3');
            nomeDoProduto.innerHTML = produto.nome;
            const precoDoproduto = document.createElement('p');
            precoDoproduto.innerHTML = `$${produto.preco}`;
            const indexProduto = document.createElement('span'); 
            indexProduto.innerHTML = index;
            indexProduto.style.display = 'none';
            produtos.appendChild(cartaoProduto);
            cartaoProduto.appendChild(imagemDoProduto);
            cartaoProduto.appendChild(nomeDoProduto);
            cartaoProduto.appendChild(precoDoproduto);
            cartaoProduto.appendChild(indexProduto);
        })
    }

    exibirProdutos();
    cartoesDeProduto = document.querySelectorAll('.cartao-produto');
    spanIndex = document.querySelectorAll('span');

    function buscarProdutos(itemPesquisado) {
        botaoBuscar.addEventListener('click', () => {
            itemPesquisado = buscarProduto.value;
            cartoesDeProduto.forEach(cartao => {
                cartao.style.display = 'none';
            })
            listaDeProdutos.forEach((produto, indice) => {
                if (itemPesquisado === produto.nome || itemPesquisado === produto.tipo) {
                    console.log(produto.nome);
                    cartoesDeProduto[indice].style.display = 'block';
                }                 
            })
        })

        
    }

    buscarProdutos();

    
    
    
    // PRA AMANHÃ: ASSOCIAR O OBJETO AOS ITENS ADICIONADOS DINAMICAMENTE. 