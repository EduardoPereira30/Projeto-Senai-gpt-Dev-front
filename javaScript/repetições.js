
function adivinharlog() {

    let divlogs = document.querySelector(".logs");
    let tagP = document.querySelector("p");

    tagP.innerHTML = "Exercicio executado ás " + new Date().toLocaleDateString();

    divlogs.appendChild(tagP);

}

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

// 1 - Contagem de 1 a 10:
function exercicios1() {
    for (let i = 1; i <= 10; i++) {

        console.log(i)

    }

    adivinharlog();
}
// 2 - Tabuada de um número:
function exercicios2() {

    let num = prompt("Escolha um numero")

    for (let i = 1; i <= 10; i++) {

        resultado = num * i;
        alert("numero = " + resultado);

    }

    adivinharlog();
}
// 3 - Soma dos primeiros N números naturais:
function exercicios3() {

    let N = Number(prompt("Digite até que numero você quer"));
    let i = 1;
    let soma = 0;
    while (i <= N) {

        soma += i;
        console.log(soma);
        i++;

    }

    adivinharlog();
}
/*******  Nível Intermediário  *******/

// 4 - Exibir os números pares de 1 a 50:
function exercicios4() {

    for (let i = 2; i <= 50; i += 2) {

        console.log(i)

    }

    adivinharlog();
}
// 5 - Jogo de adivinhação:
function exercicios5() {
    let numero = Math.floor(Math.random(Number) * (100 - 0) - 1);
    let escolha = -1;

    while (escolha != numero) {

        escolha = prompt("Tente adivinhar o numero")

        if (numero < escolha) {

            alert("O numero certo é menor")
            console.log(numero)

        } else if (numero > escolha) {

            alert("O numero certo é maior")
            console.log(numero)

        } else if (numero == escolha) {

            alert(" O numero está ceto");

        }

    }

    adivinharlog();
}
// 6 - Contagem regressiva:
function exercicios6() {

    let contadora = prompt("Digite o numero para a contagen começar")

    while (contadora >= 0) {
        alert(contadora);
        contadora--;

    }

    adivinharlog();
}
/******  Nível Avançado  ******/

// 7 - Soma dos dígitos de um número:
function exercicios7() {

    let numero = prompt("digite o numero para soma os digitos");
    let digitosArray = numero.toString().split('');

    let i = 0;

    while (i <= 0) {
        soma = Number(digitosArray(length)) + Number(digitosArray(length)) + Number(digitosArray(length));
        alert(soma);
        i++;
    }
    
    adivinharlog();
}
