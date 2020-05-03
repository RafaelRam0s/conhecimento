



function contar() {
    var inicio = window.document.getElementById('start_number')
    var final = window.document.getElementById('end_number')
    var pular = window.document.getElementById('skip_number')
    var resultado = window.document.getElementById('mostrar_conta')

    inicio = Number(inicio.value)
    final = Number(final.value)
    pular = Number(pular.value)

    resultado.innerHTML = 'Contando:<br><p>'

    // while (inicio <= final) {
    //     resultado.innerText += ` ${inicio} &#128073;`
    //     inicio += pular
    // }
    

    // do {
    //     resultado.innerText += ` ${inicio} &#128073;`
    //     inicio += pular
    // } while (inicio <= final)


    for (/*inicio = Number(inicio.value), final = Number(final.value), pular = Number(pular.value)*/; inicio <= final; inicio += pular) {
        resultado.innerHTML += ` ${inicio} &#128073;`
    }

    resultado.innerHTML += ' &#127937;</p>'
}
