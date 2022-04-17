// ter o método "autenticar" é ser autenticavel

export class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }


}