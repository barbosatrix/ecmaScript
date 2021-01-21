const data = {
    frontend :'oscar',
    backend: 'patricia',
    desing: 'Ana'
}

const entries = Object.entries(data);

console.log(entries)
console.log(entries.length)
//----
const data2 ={
    frontend :'oscar',
    backend: 'patricia',
    desing: 'Ana'
}

const values = Object.values(data2)
console.log(values)
console.log(values.length)

//--
const string = 'hello'
console.log(string.padStart(7,'hi'))//añadir caracteres
console.log(string.padEnd(7,'hi'))//añadir caracteres

//--trading comas, al final del objeto sin generar error

const obj = {
    name : 'gerardo',
}
console.log(obj)

//--async y await

const helloWord = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(()=>resolve('Hello Word'),3000)
        :reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWord() ;
    console.log(hello)
}

helloAsync()

//---manejar errores

const anotherFunction = async () => {
    try {
        const hello = await helloWord();
        console.log(hello);
    }catch(error){
        console.log(error)
    }
}

anotherFunction();