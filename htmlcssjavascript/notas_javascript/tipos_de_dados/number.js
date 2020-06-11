














/*
Number

Transformando valores para números

*/




var num = '55.9';
typeof num;
num = Number(num);
typeof num;



num = '55.9';
num = Number.parseFloat(num)
// Transforma para racional, isto é aceita números com vírgula, que no sistema americano a vírgula é ponto final será apresentado o número da forma que ele estiver então neste caso ele é 55.9
num = '55'
num = Number.parseFloat(num)
// E nesse é 55

num = '55.9'
num = Number.parseInt(num)
// Pega só a parte inteira do número, então aqui ele fica 55
num = '55.1'
num = Number.parseInt(num)
// 55

num = '55'
num = Number.parseInt(num)
// 55

num = ''
num = Number.parseInt(num)
// NaN
num = ''
num = Number.parseFloat(num)
// NaN

num = '55'
num = Number(num)
// O javascript percebe se é inteiro ou racional, aqui retorna 55

num = '55.1'
num = Number(num)
// Retorna 55.1

num = ''
num = Number(num)
// Retorna 0



num = 1234
num = num.toFixed(2)
//Caso queira que seja obrigatório só mostrar tantas casas decimais, faça como o ex acima, em que aparecerão duas casas decimais independente do valor, aliás os números que estiverem para trás da casa decimal definida são arredondados
// O valor que retorna é uma string e não um number
// 1234.00
num = 12345.987
num = num.toFixed(2)
// 12345.99
num = 12345.984
num = num.toFixed(2)
// 12345.98
num = 12345.985
num = num.toFixed(2)
// 12345.98
num = 12345.9857
num = num.toFixed(2)
// // 12345.99
