import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

//objeto - instanciando um cliente
const cliente = new Cliente("Carol", 11122233345);
cliente.email = "carol2@gmail.com";

const contaCorrenteCarol = new ContaCorrente(cliente, 1001);
contaCorrenteCarol.depositar(500);


const cliente2 = new Cliente("Lucas", 22222222234);
cliente2.email = "lucas@gmail.com";

const contaCorrenteLucas = new ContaCorrente(cliente2, 1002);

contaCorrenteCarol.transferir(100, contaCorrenteLucas);

const contaSalario = new ContaSalario(cliente);
contaSalario.depositar(100);
contaSalario.sacar(50);

const contaPoupanca = new ContaPoupanca(0, cliente, 1001);

contaCorrenteCarol.transferir(300, contaPoupanca);
console.log(contaPoupanca);
console.log(contaCorrenteCarol);

