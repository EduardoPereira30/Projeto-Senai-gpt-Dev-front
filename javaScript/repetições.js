// /******  EXEMPLOS  ******/


// console.log("FOR");
// for (let contadora = 1; contadora <= 5; contadora++) {

//   console.log(contadora);

// }

// console.log("WHILE");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5) {

//   console.log(contadoraWhile);

//   contadoraWhile++;

// }

// console.log("DO WHILE");

// let operacao = "";
// do {

//   operacao = prompt("Qual operação deseja fazer?");

//   if (operacao != "+" &&
//       operacao != "-" &&
//       operacao != "*" &&
//       operacao != "/") {

//     alert("Operação inválida.");

//   }

// } while (operacao != "+" &&
//         operacao != "-" &&
//         operacao != "*" &&
//         operacao != "/");


// /******  Nível Básico  ******/

// // 1 - Contagem de 1 a 10:

// for(let i = 1; i <= 10; i++ ){

// console.log(i)

// }

// // 2 - Tabuada de um número:

// let num = prompt("Escolha um numero")

// for (let i = 1; i <= 10; i++) {

//     resultado = num * i;
//     alert("numero = " + resultado);

// }

// // 3 - Soma dos primeiros N números naturais:

// let N = Number(prompt("Digite até que numero você quer"));
// let i = 0;
// while ( i <= N - 1) {

//     soma = i + 1;
//     console.log(soma);
//     i++;

// }

// /*******  Nível Intermediário  *******/ 

// // 1 - Exibir os números pares de 1 a 50:

// for (let i = 2 ; i <= 50 ; i += 2){

//     console.log(i)

// }

// // 2 - Jogo de adivinhação:

let numero = Math.random(Number)*(100 - 0 ) - 1 ;
let escolha = 0;

while( escolha != numero){

escolha = prompt("Tente adivinhar o numero")

    if(  numero < escolha){

        alert("O numero certo é menor")
        console.log(numero)

    } else{

        alert("O numero certo é maior")

    }

}

alert(" O numero está ceto")





