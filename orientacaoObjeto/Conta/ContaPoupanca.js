import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldoInical, cliente, agencia){
        super(saldoInical, cliente, agencia)
    }

    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor,taxa);
    }

}