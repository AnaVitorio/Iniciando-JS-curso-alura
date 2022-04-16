export class Conta{

    constructor(saldoInical, cliente, agencia){
        this._saldoInical = saldoInical;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
        
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    depositar(valor){
        if(valor < 0){
            return "Não é possível depositar valores negativos"
        }
        this._saldo = this._saldo + valor;

    }


    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor; 
        } else{
            console.log("Voce não tem saldo suficiente.");
        }
    }

    transferir(valor, contaDestino){
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}