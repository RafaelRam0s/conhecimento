/*
Variáveis
Variáveis são um conjunto de caractéres que podem receber uma instrução

Para se existir uma variável é necessário
    Começar com uma letra

    Não usar nenhuma palavra-chave (palavras chave são palavras no javascript que já possuem uma instrução, por exemplo não podemos colocar:
        var var = "eu te avisei que não dá"; console.log(var);
        var console = "Testando de novo né?"; cosole.log(console);
        var log = "pode fazer a vontade que não vai rolar"; console.log(log);

Variáveis podem possuir:
    Letras
    Números
    Underline (@@@@@ para funções ocultas)
    Cifrões (@@@@@ no jquery serve para selecionar todos os elementos )

Cuidado:
    As variáveis diferenciam maiúsculas de minúsculas, exemplo:
        var texto = "Lorem"; console.log(texto);
        var Texto = "blabla"; console.log(Texto);
*/










// Contas

var x = 5;
// A palavra var serve para indicar que será feita uma variável
// O x é uma palavra aleatória que usei
// O símbolo de igualdade = no javascript pode é lido como um receber, 
// O número em javascript é simplesmente um número
// Então o que podemos ler do código acima é variável x recebe número 5
// O ponto-e-vírgula serve para encerrar uma instrução, como se falasse esta linha de código acabou
// A partir de agora a palavra x terá a instrução de agir como o número 5 fechou
var y = 2;
var total = x + y;
// Podemos usar alguns sinais que usamos na nossa matemática para fazer operações
console.log(total);
// console - serve para ativar o console 
// log() - serve para inserir uma informação dentro do console, o que estiver dentro do seu parênteses é o que será apresentado, como definimos que a palavra total receberá a soma dos valores de x e y, sendo 5 e 2 seus valores respectivamente, então deverá ser apresentado na tela o número 7
var total = 11;
// Antes haviamos definido que o total era a soma de x + y, o que acontece se colocarmos novamente informando que ele recebe outro conjunto de valores é que ele acaba por deletar a informação que ele tinha e colocar uma nova no lugar
console.log(total);
// Então aqui deveria aparecer o número 11
console.log(x);
console.log(y);
// Não se preocupe os valores x e y continuam a existir normalmente com os valores que lhes foram dados
console.log(x + y);
// Também podemos somá-los em outros locais

var numG = 123e5;
var numP = 123e-3;
//Números extra grandes ou extra pequenos podem ser escritos com notação científica
console.log(numG, numP);






// Textos

var apresentacao_01 = "Hello World!";
// A partir de agora a variável apresentacao_01 armazenará o dado do tipo String Hello World!
// As aspas servem para indicar que tudo o que estará entre elas será um texto
console.log(apresentacao_01);

var aprendendo = "Tudo o que está entre aspas é considerado um texto e não uma instrução javascript, isso quer dizer que se eu digitar, nome de variáveis como aprendendo ou palavras-chaves como console.log(apresentacao_01) nada acontecerá até mesmo se for números, por exemplo: 3+ 4";
console.log(aprendendo);

var ola = "Hello", mundo = "World";
// Essa é outra maneira de declarar uma variável, a vírgula serve para encerrar uma atividade e usar a mesma instrução para o próximo elemento
var apresentacao = ola + mundo;
// Ao somarmos textos eles se concatenam, isto é se tornam um só
console.log(apresentacao);
// Se você testou verá que faltou um espaço, temos algumas formas de se concertar isso
// 1° Forma - Adicionando outra string com um espaço dentro
console.log(ola + " " + mundo);
// Parece que simplesmente adicionei uma string vazia, mas na verdade adicionei uma string com barra de espaço
// O que está dentro do parênteses do log também poderia ser o valor do apresentacao
// 2° Forma - modificando variável ola
var ola = "Hello "
// Cuidado cada espaço que der dentro de uma strig é considerado um texto então se colocar vários seguidos eles não serão desconsiderados
console.log(apresentacao);
// Como a lógica do apresentacao está antes desta variável redefinida ele continuará a apresentar o valor de antes, pois no momento em que o javascript é rodado é feito linha por linha para sua execução, e para concertar esse segundo problema basta recolocar a lógica do apresentacao
var apresentacao = ola + mundo;
// O ideal não é você refazer todo o código por uma mudança, na prática a única coisa que você faria era acrescentar um espaço após o Hello dado pela primeira variável ola
console.log(apresentacao);

var olaMundo1 = "Hello World! é a mesma coisa que 'Ola Mundo!' em português";
var olaMundo2 = 'Hello World! é a mesma coisa que "Ola Mundo!" em português';
// Como existem duas formas de se declarar uma string podemos usar uma das aspas para especificar que tudo ali dentro será texto e outro tipo de aspa para marcar
console.log(olaMundo1, olaMundo2);










// Indefinido

var valor;
// Esta é uma outra maneira de fazer uma variável
// Ao se definir simplesmente que determinada palavra será uma variável ela se torna do tipo undefined
valor = "Qualquer coisa";
// É possível definir o valor da variável depois de ter sido declarada uma
// A partir de agora ela se torna do tipo string
valor = 5;
// Agora é do tipo number
valor = undefined;
// Agora voltou a ser indefinida
console.log(valor);















