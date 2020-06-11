









/*

String

Para transformar um valor em String você pode fazer de alguns jeitos

Com crases ${valor} <tagname>

*/

var texto = 55;
typeof texto;
// A variável texto contém o número 55 do tipo number


texto = texto.toString();
typeof texto;





texto = 55;
typeof texto;
texto = String(texto);
typeof texto;




texto = 55;
typeof texto;
texto += ''//podendo ser aspas duplas ou crase tbm
typeof texto;




texto = 'Hello World!'
texto = texto.length
// @@@@@ Como existe uma palavra reservada chamada text e eu fiz uma variável texto que é muito parecida o nome o vscode não coloriu o length, mas age normalmente
// length retorna o número de caractéres que uma determinada string possui, contando espaços e símbolos especiais tbm
texto = 'Hello World!'
var frase = `A frase ${texto}, possui ${texto.length}`
frase = frase.length
// retorna 31, pois ele faz o seguinte A frase Hello World!, possui 12
// length retorna valor number
// length não lê numbers, por exemplo: num = 55; num = num.length (retornará undefined)










apresentacao = 'Hello World!'
apresentacao = apresentacao.toUpperCase()
// .toUpperCase() - torna todos os caractéres para letras maiúsculas
// Retorna HELLO WORLD!
apresentacao = 'Hello World!'
apresentacao = apresentacao.toLowerCase()
// . toLowerCase() - torna todos os caractéres para letras minúsculas
// Retorna hello world!




var substitua = '1.2.3.4.5'
substitua = substitua.replace('.', ',')
// 1,2.3.4.5
// replace substitui o valor que estiver no primeiro entre aspas simples, duplas ou crases, pelo valor que estiver no segundo aspas simples, duplas ou crases, este efeito só ocorre para o primeiro valor que foi achado








