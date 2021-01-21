let name = "Gerardo"
let age = 26

//antes ES6
obt = {name : name, age :age}
//ahora ES6
obt1 = {name, age}

// antes

function new_Function(name, age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
}

//Arrow Functions

const names= [
    {name:'Oscar', age:'28'},
    {name:'Camilo',age:'45'}
]
//em5
let listOfNames= names.map(function(item){
    console.log(item.name)
})

const listOfNames3 = (name,age,country) => {
    ///
}
//em6
let listOfNames2 = names.map (item => console.log(item.name))

const listOfNames4 = name => { //Cuando solo envio un parametro
    // del item o solo usare uno de ellos
 }

 const square = num => num * num; //defnir una funcion sin return explicito


 //Promises

const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if(true){//lo dejamos true para probar
            resolve('Hey')
        }else{
            reject('Ups!!')
        }
    })
}//declarar la promesa
helloPromise()//llamar la promesa
.then(response => console.log(response))
.then(()=> console.log('Segunda funcion llamada al ser success'))
.catch(error => console.log(error))


//desestructurar los parametros de la funcion

const persona = {
	nombre: 'Jesus',
	apellido: 'Quinto',
	edad: 23
}

function saludar({ nombre, apellido, edad }) {
	const saludo = `Hola!, mi nombre es ${nombre} ${apellido} y tengo ${edad} años, saludos desde Venezuela`;

	console.log(saludo);
}
saludar(persona);

//importar un modulo a la antigua

import  {hello}  from "./module.mjs";

console.log(hello())