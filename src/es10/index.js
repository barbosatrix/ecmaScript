let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2))
console.log(array.flatMap(value =>[value, valu*2]))

//Eliminar espacios

let hello = '          Hello World    '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

//
try{

}catch{//ya no es necesario pasar el (error) enb el catch
    error
}

//arreglo a aobjeto

let entries = [["name","oscar"],["age","32"]]
console.log(Object.fromEntries(entries))

//uso de Symbols

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)