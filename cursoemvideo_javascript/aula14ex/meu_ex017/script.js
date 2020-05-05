




function calcularTabuada() {
    var numero = window.document.getElementById('numero_tabuada')
    var tabela = window.document.getElementById('mostra_tabuada')

    if (String(numero.value) == '') {
        window.alert('Por favor digite um número')
    } else {
        numero = Number(numero.value)

        tabela.innerText = ''

        for (var repeticao = 1; repeticao <= 10; repeticao ++) {
            tabela.innerHTML += `<tr><td>${numero} x ${repeticao} = ${numero * repeticao}</td></tr>`
        }
    }
}
