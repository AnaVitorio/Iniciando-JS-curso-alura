export class ContaCorrente{
    numeroConta;
    agencia;
    _saldo = 0;



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
