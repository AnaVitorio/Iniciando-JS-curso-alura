import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//objeto - instanciando um cliente
const cliente = new Cliente("Carol", 11122233345);
cliente.email = "carol2@gmail.com";

const contaCorrenteCarol = new ContaCorrente(1001, cliente);
contaCorrenteCarol.depositar(100);


const cliente2 = new Cliente("Lucas", 22222222234);
cliente2.email = "lucas@gmail.com";

const contaCorrenteLucas = new ContaCorrente(1002, cliente2);

contaCorrenteCarol.transferir(100, contaCorrenteLucas);

console.log(cliente);
console.log(cliente2);