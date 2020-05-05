




// let x = [12, , 'teste']
// array uma variável que pode armazenar diversos valores, elemento colocado dentro de um array possui um número, o primeiro elemento é 0 o segundo 1 e assim por diante
// y = x[0]
// ao abrir colchetes na frente de um array vc está dizendo que está selecionando um elemento dele, e ao colocar um número fará referencia a um dos valores relaceionados com o elemento



// let num = []

// console.log('Nosso vetor é' + num)

// num = [5, 8, 2, 9, 3]
// console.log(`Nosso vetor é ${num}`)

// num[2] = 0
// // Vai substituir o valor que está no bloco dois pela instrução que vai receber
// console.log(`Nosso vetor é ${num}`)

// num[5] = 7
// // acrecenta
// console.log(`Nosso vetor é ${num}`)

// num[7] = 35
// // acrescenta, mas como não existe um elemento 6, ele cria um espaço vazio e depois adiciona 
// console.log(`Nosso vetor é ${num}`)

// num.push(11)
// // .push avisa que dentro do array será adicionado a instrução que estiver entre os parêntes na última posição e já dá o número de indentificador (indice) para ele
// console.log(`Nosso vetor é ${num}`)

// console.log(`Nosso vetor é ${num.length}`)
// // .length acrescentado em um array informa o número de elementos que ele possui

// console.log(`Nosso vetor é ${num.sort()}`)
// // .sort() coloca em ordem crescente em relação a binários os elementos de um array e redefine suas posições



let num = [5, 8, 2, 9, 3]

num.push(1)

num.sort()

num.push(4)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log('O primeiro elemento é ' + num[0])




