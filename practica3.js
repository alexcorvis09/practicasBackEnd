// crea un objeto JSON que represente información sobre una persona (nombre, ciudad, edad)
//y luego escribe una función que tome ese objeto como parámetro e imprima en la cosola
//alguna de sus propiedades

let persona1 = {
   nombre:'Alex',
   ciudad:'CDMX',
   edad:'31',
   cumpleaños: '12.14'
}
const displayProperty = (obj, x) =>{
    property= obj[x]
    console.log(property)
}

displayProperty(persona1, ['nombre'])

//crea un objeto JSON vacío y luego escribe una función que tome ese objeto como parametro
//y agregue una nueva propiedad y su valor 

let person2 ={
}

const addProperty = (obj, property) =>{
    obj[property]='value'
    return obj
}

addProperty(person2['nombre']= 'Alex')
addProperty(person2['edad'] = '35')

console.log(`La persona 2 se llama ${person2.nombre} y tiene ${person2.edad} años`)

// //Define dos objetos JSON que regresen información sobre productos (nombre, precio, cantidad)
// //Escribe una función que tome estos dos objetos como parámetro y compare sus propiedades
// //para determinar si son iguales o no. 

let producto1 = {
    nombre:'Mayonesa McCormick',
    precio:'$79',
    cantidad:'870g'
}

let producto2 = {
    nombre:'Mayonesa Hellmans',
    precio:'$92',
    cantidad:'800g',
    perdonoAPedrito:'sí'
}

const comparingObjs = (obj1, obj2) =>{
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
        console.log("son diferentes")
    } else{
    console.log("Son iguales")}
}

comparingObjs(producto1, producto2)