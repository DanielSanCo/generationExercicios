/* Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes, 
a função deverá receber os  seguintes parâmetros, peso e altura. */

let peso = prompt("Digite o peso");
let altura = prompt("Digite a altura");

const calcImc = (p, h) => {
    result = p / (h*h);
    return (result.toFixed(2));
}

alert(calcImc(peso, altura))