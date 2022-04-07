console.log("Trabalhando com listas");

// declarando uma lista
const listaPaises = new Array(
    "Brasil",
    "EUA",
    "Argentina",
    "França"
);

console.log("Lista original")
console.log(listaPaises);

//Adicionando novos elementos a lista
console.log("Adicionando elementos")
listaPaises.push("México");
listaPaises.push("Espanha");
console.log(listaPaises);

// remove o último elemento da lista
console.log("Removendo o último elemento")
listaPaises.pop();
console.log(listaPaises);

//deletando uma posição específica
//posição 2 somente um elemento
listaPaises.splice(2, 1)
console.log(listaPaises);

//tamanho da lsita
console.log("Lista de países tem tamanho: "+listaPaises.length);

// Acessando um elemento
console.log("Acessando um elemento pelo indíce");
console.log(listaPaises[2]);


//criar lista vazia 
const listaIdades = new Array();
console.log(listaIdades.length);
listaIdades.push(21);
listaIdades.push(76);
listaIdades.push(12);
listaIdades.push(34);
listaIdades.push(26);
listaIdades.push(10);
listaIdades.push(57);
console.log(listaIdades);
console.log("Novo tamanho: "+listaIdades.length);

