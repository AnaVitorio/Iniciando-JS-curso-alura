import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldoInical, cliente, agencia){
        super(0, cliente, agencia)
    }
}