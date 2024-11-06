const buscarProduto = document.querySelector('#buscar-produto');
const botaoBuscar = document.querySelector('#botao-buscar');
const filtroBusca = document.querySelectorAll('.filtro-busca');
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
    
    function exibirProdutos(listaProdutos) {
        produtos.innerHTML = '';

        listaProdutos.forEach(produto => {
            const cartaoProduto = document.createElement('div');
            cartaoProduto.classList.add('cartao-produto');
            cartaoProduto.innerHTML = `
                <img src= "${produto.imagem}" alt="${produto.nome}" />
                <h3>${produto.nome}</h3>
                <p>$${produto.preco.toFixed(2)}</p>
            `;

            produtos.appendChild(cartaoProduto);
        });
    }

    function buscarUmProduto(busca) {
        botaoBuscar.addEventListener('click', () => {
            busca = buscarProduto.value.toLowerCase();
            const produtosFiltrados = listaDeProdutos.filter(produto => produto.nome.toLowerCase().includes(busca));
            exibirProdutos(produtosFiltrados);
            if (produtosFiltrados.length === 0) {
                produtos.innerHTML = 'Nenhum produto foi encontrado.' 
            }
        })
    }

    function exibirFiltros() {
        const tiposUnicos = new Set(listaDeProdutos.map(produto => produto.tipo));
        const tiposDeProdutos = [...tiposUnicos];

        tiposDeProdutos.forEach(tipo => {
            const botaoDeFiltragem = document.createElement('button');
            botaoDeFiltragem.innerHTML = tipo;
            botaoDeFiltragem.classList.add('filtro-busca');
            opcoesBusca.appendChild(botaoDeFiltragem);
        })
    }

    exibirProdutos(listaDeProdutos);
    exibirFiltros();
    buscarUmProduto();

    
    

    