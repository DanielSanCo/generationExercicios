/*1 - Faça um sistema que leia a idade de uma pessoa expressa em anos, 
meses e dias e mostre-a expressa apenas em dias./*

/*let year = prompt("anos que você está vivo: ");
let months = prompt("meses que você está vivo: ");
let days = prompt("dias que você está vivo: ");
let totDays = parseInt(year)*365 + parseInt(months)*30 + parseInt(days)
alert("Você viveu " + totDays + " dias")*/

/*2 - Faça um sistema que leia a idade de uma pessoa expressa em dias e mostre-a expressa em 
anos, meses e dias.*/

/*let ageDay = prompt("Sua idade expressa em dias: ")
alert((ageDay/365).toFixed(0) + " ano(s) " + ((ageDay%365)/30).toFixed(0) + " mese(s) e " + ((ageDay%365)%30).toFixed(0) + " dia(s)")

/*3 - Faça um sistema que leia o tempo de duração de um evento em uma fábrica expressa em 
segundos e mostre-o expresso em horas, minutos e segundos.*/

/*let time = prompt("Digite o tempo de duração de uma maquina em segundos: ")
alert(Math.floor((parseInt(time)/3600)) + " hrs " + Math.floor((parseInt(time)%3600)/60) + " mins " + ((parseInt(time)%600)%60) + "s");*/

/*4 - Escreva  um sistema que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: */

/*let A, B, C, R, D 

A = prompt("Digite o A: ")
B = prompt("Digite o B: ")
C = prompt("Digite o C: ")

if(A >= 0 && B >= 0 && C >= 0) {
    R = (parseInt(A)+parseInt(B))**2
    S = (parseInt(B) + parseInt(C))**2    
}else{
    alert("Todos os numeros tem que ser positivos")
}

D = (R + S)/2

alert(`R = ${R} \nS = ${S} \nD = ${D}`)*/

/*5 - Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.*/

/*
let notaUm = prompt("Nota 1 do aluno: ")
let notaDois = prompt("Nota 2 do aluno: ")
let notaTres = prompt("Nota 3 do aluno: ")
media = (parseInt(notaUm) + parseInt(notaDois) + parseInt(notaTres))/10
alert("Média do aluno: " + media);*/

/*6 - Construa um programa em c que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1, y1) e P(x2, y2), 
escreva a distância entre eles. A fórmula que efetua tal*/

/*
let px1, px2, py1, py2, d

px1 = prompt("Ponto X1: ")
px2 = prompt("Ponto X2: ")
py1 = prompt("Ponto y1: ")
py2 = prompt("Ponto y2: ")
d = Math.sqrt(((parseInt(px2) - parseInt(px1))**2) + ((parseInt(py2) - parseInt(py1))**2)).toFixed(2)

alert("A distancia entre eles é " + d + "m")*/

//7 - Um sistema de equações lineares do tipo:

/*let a, b, c, d, e, f, x, y

a = prompt("valor de a: ")
b = prompt("valor de b: ")
c = prompt("valor de c: ")
d = prompt("valor de d: ")
e = prompt("valor de e: ")
f = prompt("valor de f: ")

x = ((parseInt(c) * parseInt(e)) - (parseInt(b) * parseInt(f))) / ((parseInt(a) * parseInt(e)) - (parseInt(b) * parseInt(d)))
y = ((parseInt(a) * parseInt(f)) - (parseInt(c) * parseInt(d))) / ((parseInt(a) * parseInt(e)) - (parseInt(b) * parseInt(d)))

alert("O valor de x é " + x + " e o valor de y é " + y)*/

//8 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a porcentagem do
//distribuidor seja de 28% e os impostos de 45%, escrever um sistema que leia o custo de fábrica 
//de um carro e escreva o custo ao consumidor

/*
let custoFab = prompt("Custo de Fabrica: ")

alert("O custo ao consumidor é: R$" + (custoFab*1.45*1.28).toFixed(2))*/