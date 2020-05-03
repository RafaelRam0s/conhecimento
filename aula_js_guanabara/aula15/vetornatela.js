




let valores = [8, 1, 7, 4, 2, 9]

// for (let pos = 0; pos < valores.length; pos ++) {
//     console.log(`O ${pos + 1}° elemento é ${valores[pos]}`)
// }

// for (let pos in valores) {
//     console.log(`O ${pos}° elemento é ${valores[pos]}`)
// }

console.log('O valor 7 está na posição ' + valores.indexOf(7))

console.log('O valor 3 não está neste array logo o javascript retorna ' + valores.indexOf(3))
// -1
// indexOf() - pesquisa em que posição está o elemento descrito dentro do seu parênteses

switch (valores.indexOf(7)) {
    case -1:
        console.log('Não foi achado')
        break;

    default:
        console.log('Está na posição ' + valores.indexOf(7))
        break;
}

// switch (valores.indexOf(3)) {
//     case -1:
//         console.log('Não foi achado')
//         break;

//     default:
//         console.log('Está na posição ' + valores.indexOf(3))
//         break;
// }




