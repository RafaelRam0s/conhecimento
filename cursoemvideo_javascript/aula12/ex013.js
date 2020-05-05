



//var agora = 8;
var agora = new Date().getDay()

/*
Retorna valores com números referentes aos dias da semana:

0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado

*/

console.log(agora)

switch (agora) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia da semana inválido')
        break
}
// switch é um if aprimorado em velocidade, o  que estiver entre parênteses será sua expressão, dentro do bloco do switch temos 3 elementos básicos o case que faz a pergunta, a expressão do switch tem o resultado a frente (agora == 0) se for execute meu bloco (:), dentro do bloco deverá ter uma ou mais instruções, ao final de cada bloco deverá ter um break, o break serve para parar a ação de perguntar se o agora é igual a algum valor nos próximos case, se estiver presente o break ele para de executar o bloco e vai direto para o fim do switch, caso não tenha um break em um case que foi encontrado ele rodará todos os outros case e default subsequentes e só parará quando ler um break, default é tipo o else do if, ele fala se não tiver nenhum valor que corresponda a um case rode-me
// expressão do switch só trabalha com números inteiros e strings






