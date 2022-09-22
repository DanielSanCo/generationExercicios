import { Patinete } from "./patinete";
import {ContaBancaria} from './contabancaria';
import {Paciente} from './paciente';

let patinete = new Patinete(2, 'DM radical', 1.3);
let conta = new ContaBancaria('12d', 'Rafael', 540);
let paciente = new Paciente('Sergio', 56, 'Resfriado');

console.log("PATINETE")
console.log(patinete.modelo);
console.log(patinete.rodas);
console.log(patinete.tamanho);
patinete.andar();
patinete.emCima();

console.log("CONTA BANCARIA")
console.log(conta.id)
console.log(conta.nome)
console.log(conta.dinheiro)
conta.sacar(20);
conta.depositar(50);

console.log("PACIENTE")
console.log(paciente.nome)
console.log(paciente.idade)
console.log(paciente.doenca)
paciente.marcar()
paciente.tratar()