//una función que reciba un número como parámetro y devuelva la suma de todos los números pares
//desde 0 hasta ese número

let suma = 0 

const sumEvenNums = (maxNumber) => {
    for (let i = 0; i <= maxNumber; i++) {
        if (i%2 == 0){
            suma = suma + i
        }
    }
    console.log(suma)
  }
  
sumEvenNums(4)

//Contar vocales, crea una función que tome una cadena de texto como parámetros 
//y cuente cuántas vocales hay en ella


const getVowels = (str) => {
    let vowelCounter = 0
    for (let letter of str.toLowerCase())
    if (letter === 'a' ||  letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        vowelCounter += 1 
    }
    console.log(vowelCounter)
}

getVowels("esta es una oracion")
//for letter of word 
//if letter === to "a" && letter === "e"