



function contar() {
    var inicio = window.document.getElementById('start_number')
    var final = window.document.getElementById('end_number')
    var pular = window.document.getElementById('skip_number')
    var resultado = window.document.getElementById('mostrar_conta')

    if (String(inicio.value) == '') {
        resultado.innerHTML = `<p>Por favor, <strong>PREENCHER</strong> o campo "Início"</p>`
    } else {
        inicio = Number(inicio.value)

        if (String(final.value) == '') {
            resultado.innerHTML = `<p>Por favor, <strong>PREENCHER</strong> o campo "Fim"</p>`
        } else {
            final = Number(final.value)

            if (String(pular.value) == '') {
                window.alert('Você não preencheu o campo "Passo", iremos considerá-lo como "1"')
                pular = 1
            } else if (Number(pular.value) == 0) {
                window.alert('Passe inválido consideraremos "Passo" igual a "1"')
                pular = 1
            } else {
                pular = Number(pular.value)
            }
        }
    }

    if (String(inicio.value) != '' && String(final.value) != '' && String(pular.value) != '') {
        resultado.innerHTML = 'Contando:<br><p>'

        while (inicio <= final) {
            resultado.innerHTML += ` ${inicio} &#128073;`
            inicio += pular
        }

        resultado.innerHTML += ' &#127937;</p>'
    }

}
