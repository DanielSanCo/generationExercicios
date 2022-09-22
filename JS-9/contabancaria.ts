export class ContaBancaria{
    id: string;
    nome: string;
    dinheiro: number;

    constructor(id: string, nome: string, dinheiro: number){
        this.id = id;
        this.nome = nome;
        this.dinheiro = dinheiro;
    }

    sacar(valor: number){
        console.log(`Sacou R$${valor.toFixed(2)} agora tem R$${(this.dinheiro-valor).toFixed(2)}`)
    }
    depositar(valor: number){
        console.log(`Depositou R$${valor.toFixed(2)} agora tem R$${(this.dinheiro+valor).toFixed(2)}`)
    }
}