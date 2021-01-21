//Propiedad reposo de objeto sin crear aun un objeto

const obj= {
    name:'oscar',
    apellido:'naranjo',
    edad:54
}

let { name, ...all} = obj
console.log ( all)

//usando propagacion unir elementos de objetos a otro objeto

const obj1 = {
    name:'oscar',
    apellido:'naranjo',
}

const obj2 = {
    edad:54
}

const obj3 = {
    ...obj1,
    edad: 98    
}
console.log(obj3)

//--
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`);
  console.log(`additional information: `, addInfo);

  /**
 * Promise Finally
 */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

 /**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);

//-regex op
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
constmatch = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);

//-regex 3

const dateString = '2018-12-23'

const dateRegex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

// Como se puede ver nos saltamos el primer espacio ya que lo que nos regresa
// dateRegex.exec(dateString) en el indice 0 es justamente el string que le pasamos por parametro
// tambien para evitar futuros errores utilizamos el operador || para que si se da el caso en que 
// dateRegex.exec(dateString) retorne null no nos de error el querer hacer el destructuring

const [ , year, month, day] = dateRegex.exec(dateString) || []

console.log(`day: ${day}, month: ${month}, year: ${year}`)

//-> day: 23, month: 12, year: 2018