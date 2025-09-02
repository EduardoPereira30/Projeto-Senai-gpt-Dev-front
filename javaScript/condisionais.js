
function adivinharlog() {

    let divlogs = document.querySelector(".logs");
    let tagP = document.querySelector("p");

    tagP.innerHTML = "Exercicio executado ás " + new Date().toLocaleDateString() + "ás" + new Date().toLocaleTimeString();

    divlogs.appendChild(tagP);

}

/**********     Nível Básico     ***********/


// Exercicio 1:
function exercicio1() {

    let idade = prompt("Qual e a idade? ");

    if (idade > 18) {

        alert("Paraben, vc é maior de idade");

    } else {

        alert("Opa, vc é manor de idade");

    }

    adivinharlog();
}
// Exercicio 2 - Verificar se um número é positivo ou negativo:
function exercicio2() {
    let numero = prompt("Digite um numero ");

    if (numero > 0) {

        alert("O numero é positivo")

    } else {

        alert("O numero é negativo")
    }

    adivinharlog();
}

// Exercicio 3 - Aprovação em uma prova:
function exercicio3() {

    let nota = prompt(" Qual é a nota do aluno de 0 a 100?")

    if (nota >= 60) {

        alert("O aluno está aprovado")

    } else {

        alert("O aluno está reprovado")

    }

    adivinharlog();
}
// Exercicio 4 - Aprovação em uma prova:
function exercicio4() {
    let numero = prompt("digite um numero");

    if (numero > 0) {

        alert("Esse numero é positivo")

    } else {

        if (numero < 0) {

            alert("Esse numero é negativo")

        } else {

            alert("Esse numero é zero")

        }

    }

    adivinharlog();
}
// Exercicio 5 - Classificação de idade:
function exercicio5() {
    let idade = prompt("Digite sua idade");

    if (idade > 0 && idade <= 12) {

        alert("Você é uma criança")

    } else {

        if (idade > 12 && idade < 18) {

            alert("Você é um adolescente")

        } else {

            alert("Você é um adulto")
        }
    }

    adivinharlog();
}
// // Exercicio 6 - Verificar se um número é par ou ímpar:
function exercicio6() {
    let numero = prompt(" digite um numero")

    if (numero % 2 == 0) {
        alert("O numero é par");
    } else {
        alert("O numero é impar");
    }

    adivinharlog();
}

/**********     Nível Intermediário     ***********/

// 7 - Calculadora simples
function exercicio7() {
    let numero1 = Number(prompt("Digite seu primeiro numero"));
    let numero2 = Number(prompt("Digite seu segundo numero"));
    let operacao = prompt("Digite o tipo de operação");

    if (operacao == "+") {

        soma = numero1 + numero2;
        alert("A soma é: " + soma)

    } else if (operacao == "-") {

        subtracao = numero1 - numero2;
        alert("A subtação é : " + subtracao);

    } else if (operacao == "*") {

        multiplicacao = numero1 * numero2;
        alert("A subtração é : " + multiplicacao)

    } else if (operacao == "/") {

        divicao = numero1 / numero2;
        alert("A divição é: " + divicao)

    }

adivinharlog();
}
// 8 - Maior entre três números:
function exercicio8() {
    let numero1 = prompt("Digite seu primeiro numero");
    let numero2 = prompt("Digite seu segundo numero");
    let numero3 = prompt("Digite seu terceiro numero");

    if (numero1 > numero2 && numero1 > numero3) {

        alert("Seu primeiro numero é o maior")

    } else {

        if (numero2 > numero1 && numero2 > numero3) {
            alert("Seu segundo numero é o maior")
        } else {

            alert("Seu terceiro numero é o maior")

        }

    }

    adivinharlog();
}
// 9 - Desconto em compras:
function exercicio9() {
    let valor = prompt("Insira o valor da compra");

    if (valor <= 100) {

        alert("valor da compra: " + valor);

    } else {

        let Desconto = valor * 0.10;
        valor = valor - Desconto;
        alert("valor da compra com desconto é: " + valor);

    }

    adivinharlog();
}
// 10 - Sistema de login simples:
function exercicio10() {
    let usuario = prompt("Digiti o user name");
    let senha = prompt("Digiti a senha");


    if (usuario == "admin" && senha == 1234) {

        alert("Login bem-sucedido");

    } else {

        alert("Acesso negado")

    }

    adivinharlog();
}

/**********     Nível Avançado     ***********/

// 11 - Classificação de triângulos:
function exercicio11() {
    let lado1 = prompt("Insira o primeiro lado")
    let lado2 = prompt("Insira o segundo lado")
    let lado3 = prompt("Insira o terceiro lado")

    if (lado1 == lado3 && lado1 == lado3) {

        alert("O triangulo é: equilátero")

    } else {

        if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {

            alert("O triangulo é: escaleno")

        } else {

            alert("O triangulo é: isósceles ")

        }

    }

    adivinharlog();
}
// // 12 - Conversão de notas para conceitos:
function exercicio12() {
    let nota = prompt("Digite sua nota de 0 a 100");

    if (nota < 60) {

        alert("nota é F");

    } else if (nota > 60, nota <= 69) {

        alert("nota é D");

    } else if (nota >= 70, nota <= 79) {

        alert("nota é c");

    } else if (nota >= 80, nota <= 89) {

        alert("nota é B");

    } else if (nota >= 90, nota <= 100) {

        alert("nota é A");

    }

    adivinharlog();
}
// 13 - Cálculo de IMC:
function exercicio13() {
    let peso = Number(prompt("Digite seu peso"));
    let altura = Number(prompt("Digite sua altura"));

    let IMC = (altura * altura) / peso;

    if (IMC <= 18.49) {

        alert("Seu peso está com baixo peso");

    } else if (IMC >= 18.5 && IMC <= 24.99) {

        alert("Seu peso está normal");

    } else if (IMC >= 25 && IMC <= 29.99) {

        alert("Você está com sobre peso");

    } else if (IMC >= 30) {

        alert("Você está com obsidade");

    }

    adivinharlog();
}