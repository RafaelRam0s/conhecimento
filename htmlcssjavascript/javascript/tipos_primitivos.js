


// Tipos primitivos
/*
Dados primitivos:
    string
    number
    boolean
    undefined

Dados complexos:
    function
    object
*/


// Number - número, indica que pode ser realizados operações matemáticas com seus valores
typeof 5;
// typeof - serve para verificar o tipo primitivo de uma variável
var x = 5;
typeof x;









// String - texto, para um conjunto de caractéres virarem texto é necessário estar entre aspas simples, duplas ou entre crases
var string1 = "String feita por aspas duplas", string2 = 'String feita por aspas simples';
var string3 = `String feita por crases`;
// Strings feitas por crases servem para usar como se fosse um texto em html, então certas palavras não funcionam, pois são usadas para código e seu uso deve ser cuidadoso, futuramente este assunto será mais aprofundado @@@@@
typeof "";
var texto = "Lorem";
typeof texto;









// Undefined - indefido, serve para avisar que determinada instrução não possui uma instrução
typeof undefined;
typeof indefinido;
var indefinido;
typeof indefinido;
var teste = "Uma string";
// Se precisar esvaziar uma variável, o mais recomendável é faze-lo retornando a indefinido
teste = undefined;
typeof teste;










// Booleanos - operações que retornam valores como verdadeira ou falsa, são consideradas booleanas
typeof true;
typeof false;
typeof texto == x;









// Objects - objetos, são códigos que possuem a função de armazenar dados
var cadastro = {
    primeiroNome:"Rafael",
    idade:17,
    conhecidoComo:"Ramos",
    numeroPreferido:6
};
/* Para acessarmos um item de um objeto temos que:
    1° Colocar o nome da lista que quer
    cadastro

    2° Colocar um ponto final para acessar
    cadastro.

    3° Colocar o nome do item da lista
    cadastro.primeiroNome
*/
console.log("Olá " + cadastro.primeiroNome + ", percebo que ainda possui " + cadastro.idade + "anos, por favor continue estudando.");
typeof {};
typeof cadastro;
typeof cadastro.conhecidoComo;










// Matrizes são feitas por colchetes e também consideradas objetos



var pessoas = ["Altrano", 98, undefined, "Beltrano", indefinido, "Deltrano", x, texto];
// Os itens de uma matriz são separados por vírgula e podem conter diversos valores
// Se tiver alguma variável que não foi definida (não ser definida vamos considerar como diferente de indefinida), a lista dá erro
typeof [];
typeof pessoas;
typeof pessoas[0];
/* Para acessar um valor da lista, precisamos:
    1° Definir de qual lista queremos
    pessoas

    2° abrir colchetes
    pessoas[]

    3° Escolher um número respectivo ao item da lista, o primeiro item é o 0, o segundo 1, o terceiro 2, e assim sucessivamente
    pessoas[0]
*/










// Null - nulo, também considerado um objeto
typeof null;
var pessoas = null;
// Fazendo dessa maneira você pode esvaziar uma variável
typeof pessoas;

// Null e undefined são iguais em valor mas diferentes em tipo
typeof null == undefined;
typeof null === undefined;




// Function - função, possui um conjunto de instruções a realizar
typeof function myFunc(){};










