

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var hora = new Date().getHours()
    //var hora = 21

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        
        //var fundoCorpo = document.body.style.background
        //fundoCorpo = '#e2cd9f'
        //descobrir porque desta maneira ele não funciona, o receber faria aquela variável passar a armazenar a string,
        // fundoCorpo += " = '#e2cd9f'"
        // fundoCorpo
        // Faz sentido não funcionar pois ele não age como uma instrução e sim uma string @@@@@

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'

    }
}





