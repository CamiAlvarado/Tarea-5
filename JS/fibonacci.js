//Mostrar la secuencia de Fibonacci:

//Fibonacci 0 al 1000.
const fibonacci = (number) => {
    let arrayPar = []
    let arrayImpar = []


    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < 1000; i++) {
        i = num1 + num2
        num1 = num2
        num2 = i

        //Números pares entre 0 y 1000.
        if (i % 2 === 0) {
            arrayPar.push(i)
         //Números impares entre 0 y 1000.
        } else {
            arrayImpar.push(i)
        }
        console.log("fibonacci " + i)
    }
    console.log(arrayPar)
    console.log(arrayImpar)
}
fibonacci()



