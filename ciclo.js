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
         case "Peru":
        calcularivaPer ()
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

//IVA PERU

function calcularivaPer () {
let ingresaPrecioProducto = prompt (nombreUsuario + " ,cuanto sale tu producto?")

if (ingresaPrecioProducto == "" ) {
    alert ("Por favor, coloca el precio")
} else {
    alert (" Con IVA sale " + (ingresaPrecioProducto * 1.18))
    alert (" Viva Peru carajo " + nombreUsuario)
}
}

//FUNCION CONCATENADA

function concatenar(var1, var2) {
    console.log ("Concatenando...")
    console.log(var1 + " " + var2)
    console.log ("Concatenado")
}


//CREANDO OBJETOS

const servicioReparacion = [
    {id:1, producto: "Reparacion de PC = 10.000"}
]
const productosHardware = [
    {id:1, producto: "Monitor = 65.000 "},
    {id:2, producto: "Mouse = 1.200 "},
    {id:3, producto: "Teclado = 5.000 "},
    {id:4, producto: "Camara = 21.000 "},
    {id:5, producto: "Placa de video = 200.000 "},
] 
const productosSoftware = [
    {id:1, producto: "Windows Original = 25.000"},
    {id:2, producto: "Pagina Web = 80.000"},
]

//RECORRER OBJETOS

for(const producto of productosHardware) {
    console.log(productosHardware)
}
for(const producto of servicioReparacion) {
    console.log(servicioReparacion)
}
for(const producto of productosSoftware) {
    console.log(productosSoftware)
}

//OBJETO CONSTRUCTOR - STAFF

function Staff(nombre, edad, direccion) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion
}

const staff1 = new Staff("Daniel Arigüel", "24","Minas Tirith, cuarta casa a la izquierda")
const staff2 = new Staff("El profe Arturo", "ni idea","Colombia")

//Consulta dentro del objeto
console.log( "nombre" in staff1)

//O tambien
for(const propiedad in staff1) {
    console.log(propiedad + ":", staff1[propiedad])
}

//INCORPORANDO CLASES (Muy similar salvo que no va funcion ni console.log)

class Clientes {

    constructor(nombre, edad, domicilio) {
        this.nombre = nombre
        this.edad = edad
        this.domicilio = domicilio
    }

    infoCliente() {
        console.log("Los datos de " + this.nombre + "son: " + this.edad + this.domicilio)
    }
}

const cliente1 = new Clientes("Oscar Martinez", 38, "Buenos Aires")
const cliente2 = new Clientes("Jorge Ramirez", 78, "Tucuman")

cliente1.infoCliente()
cliente2.infoCliente()

//CREANDO PRODUCTOS CON CLASES

class Producto {

    constructor(name, price) {
        this.name = name.toUpperCase()
        this.price = parseFloat(price)
        this.sold = false
        }

        vender() {
            this.sold = true
        }
}

const producto1 = new Producto("Memoria RAM", 12.000)
const producto2 = new Producto("Disco SSD", 9.000)

producto1.vender()

console.log(producto1)

//INCORPORANDO ARRAYS

const listaDePrecios = ["Placa de video = 200.000", "Reparacion de PC = 10.000", "Pagina web = 80.000"]

console.log(listaDePrecios.length)

console.log("Listado de precios ")
for (let index=0; index < listaDePrecios.length; index++) {
    console.log(listaDePrecios[index])
}

//Agregando Array a uno ya existente

listaDePrecios.push ("Software de Windows Original = 25.000 ")

console.log (listaDePrecios)

//Agregando Array, primero en la lista ya existente

listaDePrecios.unshift ("Precios correspondientes a Abril ")

console.log (listaDePrecios)

//Con listaDePrecios.pop() sacamos el ultimo item de la lista, con listaDePrecios.shift() sacamos el primero.

//Con listaDePrecios.splice (2,2) eliminamos datos dentro del Array. Dentro del parentesis el primer numero es la posicion del dato, que empiezan desde 0, y el segundo la cantidad de datos que queremos eliminar, desde ese que marcamos en el primer numero en adelante.

//Si quisiera convertir un Array en un string lo hago con .JOIN (). Ejemplo console.log( listaDePrecios.join(" ,")

//Lista de productos nuevos

const listaDePrecios2 = [" Monitor = 65.000 ", "Mouse = 1.200 "]
const listaDePrecios3 = [" Teclado = 5.000 ", "Camara = 21.200 "]

const todosLosPrecios = listaDePrecios.concat(listaDePrecios2, listaDePrecios3)

console.log (todosLosPrecios)

//Subarray de un Array

const listaDePreciosPerifericos = listaDePrecios.slice(5, 8)

console.log (listaDePreciosPerifericos)

//Para sacar el indice de un elemento en un array se usa console.log( listaDeProductos.indexOf("Aca iria el nombre del que queremos sacar el numero de indice") )

//Para saber si un elementos se encuentra en el Array se usa console.log( listaDeProductos.includes ("El nombre del que queremos saber si esta en la lista") )

//El reverse es destructivo y cambia el orden de atras hacia adelante, hay que usarlo con cuidado. Ejemplo: listaDeProductos.reverse ()

//Array con compras

const listaComprasIva = []

let cantidadDeCompras = 3

do {
    const listaDeCompras = prompt(" Que te gustaria comprar? ")
    listaComprasIva.push(listaDeCompras)
    console.log(listaComprasIva.length)
} while(listaComprasIva.length != cantidadDeCompras)

const otraListaDeCompras = listaComprasIva.concat([" :esta es tu lista de compras"])
alert(otraListaDeCompras.join(" "))

//Lista de compras

function listaDelUsuario(type, price) {
    this.type = type
    this.price = price

    this.item = 0
    if(type == Reparacion) this.price = servicioReparacion
    if(type == Monitor) this.price = productosHardware.id1
    if(type == Mouse) this.price = productosHardware.id2
    if(type == Teclado) this.price = productosHardware.id3
    if(type == Camara) this.price = productosHardware.id4
    if(type == Placa) this.price = productosHardware.id5
    if(type == Windows) this.price = productosSoftware.id1
    if(type == Web) this.price = productosSoftware.id2
}

while(true) {
    alert("Vamos a hacer una lista de compras")
    const type = prompt("Ingrese el producto que compro")
    
    const compra = new listaDelUsuario(type, price)
    console.log (compra)

    if(prompt("Compras algo mas?") == "n") {
        break
    }
}