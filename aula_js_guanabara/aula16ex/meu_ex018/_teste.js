



lista = [1, 4, 5, 11, 2 ,3]

let contador = 1
let menorValor = lista[0]
let maiorValor = lista[0]
console.log(menorValor)
while (lista.length >= contador) {
    
    if (menorValor > lista[contador]) {
        menorValor = lista[contador]
    }

    if (maiorValor < lista[contador]) {
        maiorValor = lista[contador]
    }
    
    contador ++
}

console.log(menorValor)
console.log(maiorValor)






