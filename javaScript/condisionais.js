// // Exercicio 1:

// let idade = prompt("Qual e a idade? ");

// if (idade > 18) {

//     alert("Paraben, vc é maior de idade");

// } else {

//     alert("Opa, vc é manor de idade");

// }

// // Exercicio 2:

// let numero = prompt("Digite um numero ");

// if( numero > 0 ){

//         alert("O numero é positivo")

// } else {

//     alert("O numero é negativo")
// }


// // Exercicio 3:


// let nota = prompt(" Qual é a nota do aluno de 0 a 100?")

// if (nota >= 60) {

//     alert("O aluno está aprovado")

// } else {

//     alert("O aluno está reprovado")

// }

// Exercicio 4:

// let numero = prompt("digite um numero");

// if (numero > 0) {

//     alert("Esse numero é positivo")

// } else {

//     if (numero < 0) {

//         alert("Esse numero é negativo")

//     } else {

//         alert("Esse numero é zero")

//     }

// }

// Exercicio 5:

// let idade = prompt("Digite sua idade");

// if( idade > 0 && idade <= 12){

//     alert("Você é uma criança")

// }else{

//     if( idade > 12 && idade < 18){

//         alert("Você é um adolescente")

//     }else{

//         alert("Você é um adulto")
//     }
// }

// Exercicio 6:

// let numero = prompt(" digite um numero")

// if (numero % 2 == 0) {
//     alert("O numero é par");
// } else {
//     alert("O numero é impar");
// }


/**********     Nível Intermediário     ***********/

// Calculadora simples

let numero1 = Number( prompt("Digite seu primeiro numero"));
let numero2 = Number(prompt("Digite seu segundo numero"));
let operacao = prompt("Digite o tipo de operação");

if (operacao == "+"){

let soma = numero1 + numero2;
alert("A soma é: " + soma)

} else if (operacao == "-") { 

    subtracao = numero1 - numero2;
    alert("A subtação é : " + subtracao);

} else if (operacao == "*"){

    multiplicacao = numero1 * numero2;
    alert("A subtração é : " + multiplicacao)

} else{

   divicao = numero1 / numero2;
   alert("A divição é: " + divicao)

}


// Maior entre três números:

// let numero1 = prompt("Digite seu primeiro numero");
// let numero2 = prompt("Digite seu segundo numero");
// let numero3 = prompt("Digite seu terceiro numero");

// if (numero1 > numero2 && numero1 > numero3) {

//     alert("Seu primeiro numero é o maior")

// } else {

//     if (numero2 > numero1 && numero2 > numero3){
//         alert("Seu segundo numero é o maior")
//     }else {

//         alert("Seu terceiro numero é o maior")

//     }

// }

// Desconto em compras:

// let valor = prompt("Insira o valor da compra");

// if (valor <= 100) {

//     alert("valor da compra: " + valor);

// } else {

//     let Desconto = valor * 0.10;
//     valor = valor - Desconto;
//     alert("valor da compra com desconto é: " + valor);

// }


