//Criando a primeira classe
class Cliente{
    nome;
    cpf;
    email;
    agencia;
    saldo;

}

//objeto - instanciando um cliente
const cliente = new Cliente();

cliente.nome = "Carol";
cliente.cpf = 11122233345;
cliente.email = "carol2@gmail.com";
cliente.agencia = 1001;
cliente.saldo = 1000.00;
// console.log(`Nome do Cliente: ${cliente._nome}`);
// console.log(`CPF: ${cliente._cpf}`);
// console.log(`Agência: ${cliente._agencia}`);
// console.log(`Saldo: ${cliente._saldo}`);
console.log(cliente);

