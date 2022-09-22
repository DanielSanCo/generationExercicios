export class Patinete{
    rodas: number;
    modelo: string;
    tamanho: number;

    constructor(rodas: number, modelo: string, tamanho: number){
        this.rodas = rodas;
        this.modelo = modelo;
        this.tamanho = tamanho;
    }

    andar(){
        console.log("Andando com o patinete")
    }
    emCima(){
        console.log("Ficar em cima do patinete")
    }
}