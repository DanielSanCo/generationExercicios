/*
Faça um programa que receba três inteiros e diga qual deles é o maior.
*/

/*
let n1, n2, n3;

n1 = prompt("Digite o primeiro numero")
n2 = prompt("Digite o segundo numero")
n3 = prompt("Digite o terceiro numero")

alert("O maior é: " + Math.max(n1, n2, n3))
*/

/*Exercicio 2*/
/*
let n1, n2, n3, numMin, numMeio, numMax;

n1 = prompt("Digite o primeiro numero")
n2 = prompt("Digite o segundo numero")
n3 = prompt("Digite o terceiro numero")

var numeros = [n1, n2, n3]
alert(numeros.sort())
*/

/*Exercicio 3*/

/*
let age;
age = prompt("Digite a idade do nadador: ")
if(age >= 5 && age <= 7){
    alert("Infantil A")
}else if(age >= 8 && age <= 11){
    alert("Infantil B")
}else if(age >= 12 && age <= 13){
    alert("Juvenil A")
}else if(age >= 14 && age <= 17){
    alert("Juvenil B")
}else if(age >= 18){
    alert("Adulto")
}else{
    alert("Ainda não tem idade para nadar")
}*/

/*Exercicio 4*/

let n = prompt("Digite um numero")

if(n % 2 == 0){
    alert(Math.sqrt(n))
}else{
    alert(n*n)
}