/*
Aqui irá dar as opções das funções
*/

import { Dias } from "./dias";
import {Palcos} from './palcos';
import {atracoes} from './atracoes';
import {Ingresso} from './ingresso';

var verDia = 9;
var comprarIngressoDia = 9;
var mostrarAtracoesPalco = 1;
var quantidadeIngressos = 3;

let dia = new Dias([8, 9, 10])
let palcos = new Palcos(atracoes)
let ingresso = new Ingresso(700, comprarIngressoDia);

console.log('---Rock in Rio---\nDias disponiveis\n  8 de Setembro (Sexta)\n  9 de Setembro (Sabado)\n  10 de Setembro (Domingo)\nDigite o numero do dia no programa');
dia.mostrarDia(verDia)
palcos.mostrarAtracoes(mostrarAtracoesPalco, verDia)
ingresso.comprarIngresso(quantidadeIngressos)