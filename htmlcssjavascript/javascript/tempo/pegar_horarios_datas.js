

// Para pegar alguma informação de tempo @@@@@da máquina da pessoa||do servidor
let dados_de_data = new Date(); // O horário é pego do @@@@@servidor

let data = dados_de_data.getDate();
let dia = dados_de_data.getDay();
let ano_inteiro = dados_de_data.getFullYear();
let horas = dados_de_data.getHours(); // Horas
let millisegundos = dados_de_data.getMilliseconds();
let minutos = dados_de_data.getMinutes(); // Minutos
let mes = dados_de_data.getMonth();
let segundos = dados_de_data.getSeconds(); // Segundos
let horario = dados_de_data.getTime();
let horario_off = dados_de_data.getTimezoneOffset();
let utc_data = dados_de_data.getUTCDate();
let utc_dia = dados_de_data.getUTCDay();
let utc_ano_completo = dados_de_data.getUTCFullYear();
let utc_horas = dados_de_data.getUTCHours();
let utc_milisegundos = dados_de_data.getUTCMilliseconds();
let utc_minutos = dados_de_data.getUTCMinutes();
let utc_mes = dados_de_data.getUTCMonth();
let utc_segundos = dados_de_data.getUTCSeconds();
let testar = dados_de_data.getVarDate();











//Fazer uma função javascript ser chamada a cada 1 segundo
setTimeout(nomeDeUmaFuncao(), 1000); // O primeiro parâmetro deve ser uma função e o segundo um número inteiro, o número inteiro será um valor de milisegundos, logo no exemplo falamos para a cada 1000ms (1 segundo) ser chamada a função nomeDeUmaFuncao()

// Para sempre ser atualizado o horário
// CUIDADO: ele não é confiável em uma função que precisa ficar se repetindo de tanto em tanto tempo, pois se tiver um processo enorme de diversas linhas de código pode ser que ocorra de a função só conseguir ser completamente lida a cada 2 segundos, mas vc pediu para ser atualizado a cada 1 segundo, putz paciência já era
function teste() {
    let data = new Date();
    let horario_atual = '' + data.getHours + ':' + data.getMinutes + ' e ' + data.getSeconds + ' segundos'
    console.log(horario_atual)
    setTimeout(teste(), 1000);
}





