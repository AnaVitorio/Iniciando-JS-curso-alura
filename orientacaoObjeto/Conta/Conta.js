// Classe abstrata não pode ser instânciada, só vai ser herdada.
export class Conta{

    constructor(saldoInical, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata.")
        }
        this._saldo = saldoInical;
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
        this._saldo += valor;
    }

    //método abstrato
    sacar(valor){
     throw new Error("O método sacar da conta é abstrato")
    }

    //método privado
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(valorSacado <= this._saldo){
            this._saldo -= valorSacado;
            return valorSacado; 
        } else{
            return 0; 
        }
    }

    transferir(valor, contaDestino){
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}