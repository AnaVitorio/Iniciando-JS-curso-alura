//Criando a primeira classe
export class Cliente{
    nome;
    cpf;
    email;


    constructor(nome, cpf, senha){
        this.nome = nome;
        this.cpf = cpf;
        this._senha = senha;
    }
}