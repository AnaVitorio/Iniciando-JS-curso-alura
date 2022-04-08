const podeDirigir = false;
const passouNaProva = false
const idade = 12;
const idadeParaTirarCarteira = 18;

if(idade >= idadeParaTirarCarteira){
    console.log(!podeDirigir);
    console.log("Você já pode tirar sua carteira de mtorista.");
    if(passouNaProva){
        console.log("Você está habilitado a dirigir.")
    }else{
        console.log("Você não passou na prova e não está habilitado a dirigir.")
    }
} else{
    console.log(podeDirigir);
    console.log("Você ainda não pode tirar carteira de motorista.");
}

const estaAcompanhado = true;
const novaIdade = 17;
const idadeParaEntraSozinho = 18;

if(novaIdade >= idadeParaEntraSozinho || estaAcompanhado ){
    console.log("Você pode entrar no show!");
    
} else{
    console.log("Você não pode entrar no show.");
}
