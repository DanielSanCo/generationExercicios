/*import { RockInRio } from "./Rock.in.Rio";

export class Dias extends RockInRio {
    apresentacao: string;
    semanas: string;

    constructor(apresentacao: string, semanas: string, data: string, ingresso: number){
        super(data, ingresso)
        this.apresentacao = apresentacao
        this.semanas = semanas
    }
    mostrarApresnatacao(){
        console.log("Sejam bem vindos ao Rock in Rio 2022")
        console.log("o evento ocorrerá durante os dias 08, 09 e 10 de Setembro")
    }
}*/

import { atracoes } from "./atracoes";

export class Dias {
    dia: number[];

    constructor(dia: number[]){
        this.dia = dia;
    }
    mostrarDia(dia: number){
        if(dia >= 8 && dia <= 10){
            console.log(`Palcos disponiveis no dia ${dia}\n
            1 - Palco Sunset:
            2 - Palco Mundo
            3 - Palco Favela`
            );
        }else{
            console.log("Dia indisponivel")
        }
    }
}