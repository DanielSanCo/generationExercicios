export class Ingresso {
    ingresso: number;
    dia: number;

    constructor(ingresso: number, dia: number){
        this.ingresso = ingresso;
        this.dia = dia;
    }

    comprarIngresso(n: number){
        console.log(`Comprou ${n} ingresso(s) para o dia ${this.dia} por: R$${n*this.ingresso},00`)
    }
}