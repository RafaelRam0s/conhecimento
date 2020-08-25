




function sorteioAlcance(min, max) {
    var numero_max = max - min + 1

    var numero_max_digitos = ('' + Math.abs(numero_max)).length

    var numero_sorteado = parseInt(Math.random() * (10 ** numero_max_digitos)) + 1

    var numero_maximo_sorteado = ''
    for (var x = 0; numero_max_digitos - x != 0; x++) {
        numero_maximo_sorteado += 9
    }
    numero_maximo_sorteado = Number(numero_maximo_sorteado) + 1

    numero_sorteado = (numero_max * numero_sorteado) / numero_maximo_sorteado

    if (numero_sorteado % 1 > 0) {
        numero_sorteado = parseInt(numero_sorteado) + 1
    } else if (numero_sorteado % 1 < 0) {
        numero_sorteado = parseInt(numero_sorteado) - 1
    }

    numero_sorteado = numero_sorteado + min - 1

    document.getElementById('sorteio').innerHTML += '<br>' + numero_sorteado
}




