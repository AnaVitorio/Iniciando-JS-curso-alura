export class ContaCorrente{
    numeroConta;
    agencia;
    saldo;


    sacar(valor){
        if(valor < this.saldo){
            this.saldo -= valor; 
        } else{
            console.log("Voce não tem saldo suficiente.");
        }
    }

    transferir(valor, contaDestino){
        if(valor > this.saldo){
            return "Saldo insufuciente para realizar essa transferência.";
        }
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
    }
}
