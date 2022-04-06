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

let paistributario = prompt (" De donde eres " + nombreUsuario + " ?")

    switch (paistributario) {
        case "Argentina":
        calcularivaArg ()
        break
         case "Colombia":
        calcularivaCol ()
        break
         case "Chile":
        calcularivaChi ()
        break
         case "Uruguay":
        calcularivaUru ()
        break
    }

//IVA ARGENTINA

function calcularivaArg () {
let ingresaPrecioProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaPrecioProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaPrecioProducto * 1.21))
}
}

//IVA COLOMBIA

function calcularivaCol () {
let ingresaPrecioProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaPrecioProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaPrecioProducto * 1.19))
}
}

//IVA CHILE

function calcularivaChi () {
let ingresaPrecioProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaPrecioProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaPrecioProducto * 1.19))
    alert (" Igual quedaste afuera del mundial " + nombreUsuario)
}
}

//IVA URUGUAY


function calcularivaUru () {
let ingresaPrecioProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaPrecioProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaPrecioProducto * 1.22))
    alert (" El mate es Argentino " + nombreUsuario)
}
}

//FUNCION CONCATENADA

function concatenar(var1, var2) {
    console.log ("Concatenando...")
    console.log(var1 + " " + var2)
    console.log ("Concatenado")
}