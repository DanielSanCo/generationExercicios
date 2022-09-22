/*
1 - Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5. (FOR)
*/
/*
for(let i = 1000; i <= 1999; i++){
    if(i % 11 == 5 ){
        console.log(i)
    }
}
*/
/*
2 - Ler 10 números e imprimir quantos são pares e quantos são ímpares.
*/
/*
var contImp = 0;
var contPar = 0;
    
for(let i = 1; i <= 10; i++){
    let num = 0;
    num = prompt('Digite um numero');
    
    if(num % 2 == 0){
        contPar += 1
    }else if(num % 2 == 1){
        contImp += 1
    }
}
alert(contPar + " são pares");
alert(contImp + " são impares");*/

/*
3 - Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. 
Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99
*/
/*
let idade = 0
var pessoas21 = 0
var pessoas50 = 0
while(idade != -99){
    idade = prompt('Digite a idade')
    if(idade < 21){
        pessoas21 += 1
    }else if(idade > 50){
        pessoas50 += 1
    }
}
alert(pessoas21 + " pessoas com menos de 21 anos")
alert(pessoas50 + " pessoas com mais de 50 anos")*/

/*
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as 
opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). Pede-se para 
elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre:
o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos
*/

var num = 1;
var pCalmas = 0, mNervosas = 0, hAgressivos = 0, oClamos = 0, m40Nervo = 0, p18Cal = 0;
while(num <= 5){
    let idade = prompt("Digte a idade")
    let sexo = prompt("Digite o sexo (1-F, 2-M, 3-Outro)")
    let opcoes = prompt("1 - calma, 2 - nervosa, 3 - agressiva")
    num += 1
    if(opcoes == 1){
        
    }
}