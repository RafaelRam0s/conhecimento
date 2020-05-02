




var hora = new Date().getHours()
var hora = 7

window.document.getElementById('hora_atual').innerHTML = `Agora são ${hora} horas`



var imagem = window.document.getElementById('img_da_hora')
var corpo = window.document.getElementsByTagName('body')[0]

if (hora < 8) {
    imagem.innerHTML = '<img src="imagens/manha.png" alt="Imagem do dia">'
    corpo.style.backgroundColor = 'rgb(255, 200, 158)'
} else if (hora < 16) {
    imagem.innerHTML = '<img src="imagens/tarde.png" alt="Imagem da tarde">'
    corpo.style.backgroundColor = 'rgb(214, 131, 75)'
} else {
    imagem.innerHTML = '<img src="imagens/noite.png" alt="Imagem da noite">'
    corpo.style.backgroundColor = 'rgb(80, 70, 70)'
}








