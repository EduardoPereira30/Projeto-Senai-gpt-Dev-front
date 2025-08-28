/**********     Nível Básico     ***********/


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

// // Exercicio 4:

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

// // Exercicio 5:

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

// // Exercicio 6:

// let numero = prompt(" digite um numero")

// if (numero % 2 == 0) {
//     alert("O numero é par");
// } else {
//     alert("O numero é impar");
// }


/**********     Nível Intermediário     ***********/

// 1 - Calculadora simples

// let numero1 = Number( prompt("Digite seu primeiro numero"));
// let numero2 = Number(prompt("Digite seu segundo numero"));
// let operacao = prompt("Digite o tipo de operação");

// if (operacao == "+"){

// soma = numero1 + numero2;
//    alert("A soma é: " + soma)

// } else if (operacao == "-") { 

//     subtracao = numero1 - numero2;
//     alert("A subtação é : " + subtracao);

// } else if (operacao == "*"){

//     multiplicacao = numero1 * numero2;
//     alert("A subtração é : " + multiplicacao)

// } else if (operacao == "/"){

//    divicao = numero1 / numero2;
//    alert("A divição é: " + divicao)

// }


// // 2 - Maior entre três números:

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

// // 3 - Desconto em compras:

// let valor = prompt("Insira o valor da compra");

// if (valor <= 100) {

//     alert("valor da compra: " + valor);

// } else {

//     let Desconto = valor * 0.10;
//     valor = valor - Desconto;
//     alert("valor da compra com desconto é: " + valor);

// }

// // 4 - Sistema de login simples:

// let usuario = prompt("Digiti o user name");
// let senha = prompt("Digiti a senha");


// if ( usuario == "admin" && senha == 1234 ) {

//     alert("Login bem-sucedido");

// } else {

//     alert("Acesso negado")

// }


/**********     Nível Avançado     ***********/

// // 1 - Classificação de triângulos:

// let lado1 = prompt("Insira o primeiro lado")
// let lado2 = prompt("Insira o segundo lado")
// let lado3 = prompt("Insira o terceiro lado")

// if (lado1 == lado3 && lado1 == lado3) {

//     alert("O triangulo é: equilátero")

// } else {

//     if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {

//         alert("O triangulo é: escaleno")

//     } else {

//         alert("O triangulo é: isósceles ")

//     }

// }

// // 2 - Conversão de notas para conceitos:

// let nota = prompt("Digite sua nota de 0 a 100");

// if (nota < 60) {

//     alert("nota é F");

// } else if (nota > 60, nota <= 69) {

//     alert("nota é D");

// } else if (nota >= 70, nota <= 79) {

//     alert("nota é c");

// } else if (nota >= 80, nota <= 89) {

//     alert("nota é B");

// } else if (nota >= 90, nota <= 100) {

//     alert("nota é A");

// }

// // 3 - Cálculo de IMC:

// let peso   = Number (prompt("Digite seu peso"));
// let altura = Number (prompt("Digite sua altura"));

// let IMC = (altura * altura) / peso ;

// if ( IMC <= 18.49) {

//     alert("Seu peso está com baixo peso");

// } else if ( IMC >= 18.5 && IMC <=24.99) {

//     alert("Seu peso está normal");

// } else if ( IMC >= 25 && IMC <= 29.99) {

//     alert("Você está com sobre peso");

// }else if ( IMC >= 30) {

//     alert("Você está com obsidade");

// }




