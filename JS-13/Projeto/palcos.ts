/*
Lista de palcos
 */

import { Dias } from "./dias";
import {atracoes} from './atracoes';

export class Palcos {
    atracoes: string[];
    
    constructor(atracoes: string[]){
        this.atracoes = atracoes;
    }
    mostrarAtracoes(palco: number, dia: number){
        if(dia >= 8 && dia <= 10){
            console.log(atracoes[palco-1])
        }
    }
}