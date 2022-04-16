import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

//objeto - instanciando um cliente
const cliente = new Cliente("Carol", 11122233345);
cliente.email = "carol2@gmail.com";

const contaCorrenteCarol = new ContaCorrente(100, cliente, 1001);
contaCorrenteCarol.depositar(100);


const cliente2 = new Cliente("Lucas", 22222222234);
cliente2.email = "lucas@gmail.com";

const contaCorrenteLucas = new ContaCorrente(0, cliente2, 1002);

contaCorrenteCarol.transferir(100, contaCorrenteLucas);

console.log(cliente);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);

const contaPoupanca = new ContaPoupanca(1000, cliente, 1001);
console.log(contaPoupanca);