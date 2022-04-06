//NOMBRE DE USUARIO
let nombreUsuario = prompt("Ingresa tu nombre de usuario")

if (nombreUsuario =="") {
    alert("No pusiste nada crack")
}
else {
    alert("Hola " + nombreUsuario)
}

//NUMERO DE ORDEN

for (let i = 1; i <= 5; i++) {

    alert(" Turno N "+i+" para "+nombreUsuario)
    break
}

//MAYORIA DE EDAD

const mayor = 18

edad = parseInt(prompt(nombreUsuario + " ingresa tu edad"))
    mayorDeEdad = edad >= mayor
    if(mayorDeEdad) {
        alert("Todo legal " + nombreUsuario + " pasa maquina")

    }else{
        alert("No loco voy a ir preso, raja de aca")
    }

alert("Te queremos " + nombreUsuario)

//CALCULADORA

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+": 
            return primerNumero + segundoNumero
            break
        case "-":
            return primerNumero - segundoNumero
            break
            
        case "*":
            return primerNumero * segundoNumero
            break
        case "/":
            return primerNumero / segundoNumero
            break
        default:
            return 0
            break    

    }
}
console.log(calculadora(10, 5, "*"))

//CALCULAR IVA

function calculariva () {
let ingresaProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaProducto * 1.21))
}
}

calculariva ()