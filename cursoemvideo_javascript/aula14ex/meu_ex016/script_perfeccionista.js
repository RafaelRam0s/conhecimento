



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
                window.alert(`Com o passo 0 não sairiámos do lugar e ficariamos repetindo o valor do início (${inicio}) infinitamente, por este motivo consideraremos "Passo" igual a "1"`)
                pular = 1
            } else {
                pular = Number(pular.value)
            }
        }
    }

    if (String(inicio.value) != '' && String(final.value) != '' && String(pular.value) != '') {
        
        if (inicio <= final && pular < 0) {
            resultado.innerHTML = `[Erro de lógica] com os dados cadastrados iriamos ao infinito negativo, pulando de ${pular} em ${pular}, e a página não aguentaria, por este motivo, peço que insira novamente outros dados`
        } else if (inicio >= final && pular > 0) {
            resultado.innerHTML = `[Erro de lógica] com os dados cadastrados iriamos ao infinito positivo, pulando de ${pular} em ${pular}, e a página não aguentaria, por este motivo, peço que insira novamente outros dados`
        } else {
            resultado.innerHTML = 'Contando:<br><p>'

            if (pular > 0) {
                while (inicio <= final) {
                    resultado.innerHTML += ` ${inicio} &#128073;`
                    inicio += pular
                }
            } else {
                while (inicio >= final) {
                    resultado.innerHTML += ` ${inicio} &#128073;`
                    inicio += pular
                }
            }

            resultado.innerHTML += ' &#127937;</p>'
        }
        
        // Para os preguiçosos que não ligam para o sinal e a matemática pura o jeito deles está nas próximas linhas
        // if (inicio <= final && pular < 0|| inicio >= final && pular > 0) {
        //     pular = - pular
        // }
    
        // resultado.innerHTML = 'Contando:<br><p>'

        // if (pular > 0) {
        //     while (inicio <= final) {
        //         resultado.innerHTML += ` ${inicio} &#128073;`
        //         inicio += pular
        //     }
        // } else {
        //     while (inicio >= final) {
        //         resultado.innerHTML += ` ${inicio} &#128073;`
        //         inicio += pular
        //     }
        // }

        // resultado.innerHTML += ' &#127937;</p>'
    }
}
