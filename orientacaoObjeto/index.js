import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//objeto - instanciando um cliente
const cliente = new Cliente();

cliente.nome = "Carol";
cliente.cpf = 11122233345;
cliente.email = "carol2@gmail.com";

const contaCorrenteCarol = new ContaCorrente();
contaCorrenteCarol.agencia = 1001;
contaCorrenteCarol.depositar(100);
contaCorrenteCarol.cliente = cliente;

const cliente2 = new Cliente();

cliente2.nome = "Lucas";
cliente2.cpf = 22222222234;
cliente2.email = "lucas@gmail.com";

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1002;
contaCorrenteLucas.cliente = cliente2;


contaCorrenteCarol.transferir(100, contaCorrenteLucas);
