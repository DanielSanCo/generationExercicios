export class Paciente {
    nome: string;
    idade: number;
    doenca: string;

    constructor(nome: string, idade: number, doenca: string){
        this.nome = nome;
        this.idade = idade;
        this.doenca = doenca;
    }

    marcar(){
        console.log("Paciente marcado")
    }
    tratar(){
        console.log(`Paciente ${this.nome} sendo tratado`)
    }
}