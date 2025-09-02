function demofilter(){

    const numeros = [1, 2, 3, 4, 5, 6]; // Array == Lista

    let numerosFiltrados = numeros.filter(numero => numero > 2);

    console.log(numerosFiltrados)
}

function demoFind(){

    let produtos = [
        {
             id: 1,
             nome: "Teclado",
             preco: 100
        },
        {
             id: 2,
             nome: "Mouse",
             preco: 50 
        },
        {
             id: 3,
             nome: "Monitor",
             preco: 700 
        }
      ];

      let produtoPreço = produtos.find( produto => produto.preco == 700)

      console.log(produtoPreço)

}

const demoMap = () => {

    let numeros = [1,2,3,4,5,6];

    let numerosDobro = numeros.map( numero => numero * 2);

    console.log(numerosDobro);

}