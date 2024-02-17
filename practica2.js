const perimeterT =(a,b) =>{
    let perimetro = (a+b) / 2
    console.log(perimetro) 
}

perimeterT(2, 3)

const primeNum = (number) =>{
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 || number === 1) {
         console.log("No es primo")
         break
        }
     else {console.log("Es primo")}
    }
}

primeNum(7)