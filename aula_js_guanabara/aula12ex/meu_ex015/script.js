


function verIdade() {
    var dataDeNascimento = window.document.getElementById('ano_nascimento')
    dataDeNascimento = Number(dataDeNascimento.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - dataDeNascimento

    var img = window.document.getElementById('imagem')

    if (idade > 150 || idade < 0) {
        window.document.getElementById('foto').innerHTML = 'Ano de nascimento inválido, por favor insira outro valor e tente novamente'
        img.src = ''
    } else {

        if (window.document.getElementById('sexo_masculino').checked == true) {
            if (idade < 12) {
                img.src = 'imagens/foto-bebe-m.png'
                maturidade = 'uma criança do sexo masculino'
            } else if (idade < 19) {
                img.src = 'imagens/foto-jovem-m.png'
                maturidade = 'um adolescente do sexo masculino'
            } else if (idade < 60) {
                img.src = 'imagens/foto-adulto-m.png'
                maturidade = 'um adulto do sexo masculino'
            } else {
                img.src = 'imagens/foto-idoso-m.png'
                maturidade = 'um idoso do sexo masculino'
            }
        } else {
            if (idade < 12) {
                img.src = 'imagens/foto-bebe-f.png'
                maturidade = 'uma criança do sexo feminino'
            } else if (idade < 19) {
                img.src = 'imagens/foto-jovem-f.png'
                maturidade = 'uma adolescente do sexo feminino'
            } else if (idade < 60) {
                img.src = 'imagens/foto-adulto-f.png'
                maturidade = 'uma adulta do sexo feminino'
            } else {
                img.src = 'imagens/foto-idoso-f.png'
                maturidade = 'uma idosa do sexo feminino'
            }
        }

        window.document.getElementById('foto').innerHTML = `<p>Pelas informações cadastradas você é ${maturidade}, que terá ${idade} anos de idade ao final de ${anoAtual}</p>`
    }    
}
