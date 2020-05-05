
let lista = []
let paragrafo = window.document.getElementById('resultado')

function addAnalise() {
    let num = window.document.getElementById('num_analisar')
    numero = Number(num.value)

    let tabela = window.document.getElementById('tabelaNumeros')
    
    if (numero > 100 || numero < 1) {
        window.alert('Valor inválido')
    } else if (lista.indexOf(numero) == -1) {
        lista.push(numero)
        
        tabela.innerHTML += `<option value="${numero}v" id="${numero}i">Valor ${numero} adicionado</option>`

    } else {
        window.alert('Valor já cadastrado')
    }

    paragrafo.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizarAnalise() {

    if (lista.length == 0) {
        window.alert('Favor adicionar um número antes')
    } else {

        let contador = 0
        let somar = 0
        
        while (lista.length > contador) {
            somar += lista[contador]
            contador ++
        }

        contador = 1
        let menorValor = lista[0]
        let maiorValor = lista[0]

        while (lista.length >= contador) {
            
            if (menorValor > lista[contador]) {
                menorValor = lista[contador]
            }

            if (maiorValor < lista[contador]) {
                maiorValor = lista[contador]
            }
            
            contador ++
        }

        paragrafo.innerHTML = `<p>Ao todo temos ${lista.length} valores cadastrados</p>`
        paragrafo.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p>`
        paragrafo.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`
        paragrafo.innerHTML += `<p>Somando todos os valores o resultado é ${somar}.</p>`
        paragrafo.innerHTML += `<p>A média dos valores digitados é ${somar/lista.length}.</p>`
    }
}





