// 1-Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

var numero;
var cubo;

function calcularCubo(numero) {
    numero = document.getElementById("input-1").value;
    cubo = numero*numero*numero;
    document.getElementById("resultado-1").innerHTML = `O resultado é ${cubo}.`
}


// 2-Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

var temperaturaFahrenheit;
var temperaturaCelsius;

function transformarFahrenheitCelsius(temperaturaFahrenheit) {
    temperaturaFahrenheit = document.getElementById("input-2").value;
    temperaturaCelsius = (temperaturaFahrenheit-32)*(5/9);

    document.getElementById("resultado-2").innerHTML = `Isso equivale à ${temperaturaCelsius}°C.`
}


// 3-Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

var base;
var altura;
var areatriangulo;

function areaTriangulo(base,altura) {
    base = document.getElementById("input-3-1").value;
    altura = document.getElementById("input-3-2").value;
    areatriangulo = (base*altura)/2; 
    
    document.getElementById("resultado-3").innerHTML = `A área desse triângulo é ${areatriangulo}cm2.`
}


// 4-Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

var raio;
var pi = 3.14;
var areacirculo;
var perimetrocirculo;

function areaCirculo(raio) {
    raio = document.getElementById("input-4").value;
    areacirculo = pi*(raio*raio);
    document.getElementById("resultado-4-1").innerHTML = `A área desse círculo é ${areacirculo}cm2.`
}

function perimetroCirculo(raio) {
    raio = document.getElementById("input-4").value;
    perimetrocirculo = 2*pi*raio;
    document.getElementById("resultado-4-2").innerHTML = `O perímetro desse círculo é ${perimetrocirculo}cm.`
}


// 5-Crie uma função que calcula 5% de desconto retornando o valor do desconto.

var valorOriginal;
var desconto;

function calcularDesconto(valorOriginal) {
    valorOriginal = document.getElementById("input-5").value;
    desconto = 0.05*valorOriginal;
    document.getElementById("resultado-5").innerHTML = `O valor do desconto é de R$${desconto}.`
}


// 6-Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

var anoNascimento;

function calcularMaioridade(anoNascimento) {
    var anoNascimento = document.getElementById("input-6").value;
    var idade = 2023-anoNascimento;

    if (idade >= 18) {
        document.getElementById("resultado-6").innerHTML = `Você é maior de idade.`
    } else {
        document.getElementById("resultado-6").innerHTML = `Você é menor de idade.`
    }
}


// 7-Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos quilômetros o carro consegue andar com esta quantidade de combustível.

var dinheiroDisponivel;

function calcularCombustivel(dinheiroDisponivel) {
    dinheiroDisponivel = document.getElementById("input-7").value;
    let litrosComprados = dinheiroDisponivel/5;
    let consumo = litrosComprados*20;

    console.log(litrosComprados);
    console.log(consumo);
    
    document.getElementById("resultado-7").innerText = `Você pode comprar ${litrosComprados} litros de combustível, e o carro poderá andar ${consumo} quilômetros.`
}