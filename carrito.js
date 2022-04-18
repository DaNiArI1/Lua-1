//NOMBRE DE USUARIO
let nombreUsuario = prompt("Ingresa tu nombre de usuario")

if (nombreUsuario =="") {
    alert("No pusiste nada crack")
}
else {
    alert("Hola " + nombreUsuario)
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
    {id:1, name: "Reparacion de PC = 10.000", price:10000, img:"imagenes/Javascript"}
]
const productosHardware = [
    {id:1, name: "Monitor = 65.000 ", price:65000, img:"imagenes/Javascript/monitor.webp"},
    {id:2, name: "Mouse = 1.200 ", price:1200, img:"imagenes/Javascript/mouse.webp"},
    {id:3, name: "Teclado = 5.000 ", price:5000, img:"imagenes/Javascript/teclado.webp"},
    {id:4, name: "Camara = 21.000 ", price:21000, img:"imagenes/Javascript/camara.webp"},
    {id:5, name: "Placa de video = 200.000 ", price:200000, img:"imagenes/Javascript/placadevideo.webp"},
] 
const productosSoftware = [
    {id:1, name: "Windows Original = 25.000", price:25000},
    {id:2, name: "Pagina Web = 80.000", price:80000},
]

//RECORRER OBJETOS

for(const producto of productosHardware) {
    console.log("Estos son nuestros productos Hardware: " + productosHardware.producto)
}
for(const producto of servicioReparacion) {
    console.log("Acerca de nuestro servicio de reparacion: " + servicioReparacion.producto)
}
for(const producto of productosSoftware) {
    console.log("Estos son nuestros productos Software: " + productosSoftware.producto)
}

//OBJETO CONSTRUCTOR - STAFF

class Staff {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
    }
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
        console.log("Los datos de " + this.nombre + " son: " + this.edad + this.domicilio)
    }
}

const cliente1 = new Clientes("Oscar Martinez", 38, " Buenos Aires")
const cliente2 = new Clientes("Jorge Ramirez", 78, " Tucuman")

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

const productoRAM = new Producto("Memoria RAM", 12.000)
const productoSSD = new Producto("Disco SSD", 9.000)

productoRAM.vender()

console.log(productoRAM)

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

class listaDelUsuario {
    constructor(type, price) {
        this.type = type
        this.price = price

        this.item = 0
        if (type == "Reparacion")
            this.price = servicioReparacion[0].price
        if (type == "Monitor")
            this.price = productosHardware[0].price
        if (type == "Mouse")
            this.price = productosHardware[1].price
        if (type == "Teclado")
            this.price = productosHardware[2].price
        if (type == "Camara")
            this.price = productosHardware[3].price
        if (type == "Placa")
            this.price = productosHardware[4].price
        if (type == "Windows")
            this.price = productosSoftware[0].price
        if (type == "Web")
            this.price = productosSoftware[1].price
    }
}

while(true) {
    alert("Vamos a hacer una lista de compras")
    const type = prompt("Ingrese el producto que compro")
    
    const compra = new listaDelUsuario(type)
    console.log (compra)

    if(prompt("Compras algo mas?") == "no") {
        break
    }
}

// CARRITO

const contenedorProductos = document.querySelector('.contenedor-productos');
const listadoCompras = document.querySelector('.listado-compras');
const ComprasRealizadas = [];

//Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})

//Funciones
function mostrarProductos() {
    productosHardware.forEach(producto => {
        //Scripting
        const divProductoHardware = document.createElement('div');
        divProductoHardware.className = 'card';

        const imgProducto = document.createElement('img');
        imgProducto.src = producto.img;
        imgProducto.className = 'card-img-top carritocard';

        const tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.name;
        tituloProducto.classList.add("card-title");

        const btnComprar = document.createElement('buttonComprar');
        btnComprar.className = "btn btn-danger btn-comprar";
        btnComprar.textContent = "Agregar al carro";
        btnComprar.onclick = () => {
            agregarAlCarro(producto.id)
        };

        divProductoHardware.appendChild(imgProducto);
        divProductoHardware.appendChild(tituloProducto);
        divProductoHardware.appendChild(btnComprar);
        
        contenedorProductos.appendChild(divProductoHardware);
    })
}

//AGREGAR AL CARRITO

function agregarAlCarro(id){
    const compraSeleccionada = productosHardware.find( producto => producto.id === id);
    ComprasRealizadas.push(compraSeleccionada);
    mostrarCompras(ComprasRealizadas);
}

function mostrarCompras( compras ) {
    
    listadoCompras.innerHTML =  "";

    compras.forEach(producto => {
        //Scripting
        const divProductoHardware = document.createElement('div');
        divProductoHardware.className = 'card';

        const imgProducto = document.createElement('img');
        imgProducto.src = producto.img;
        imgProducto.className = 'card-img-top carritocard';

        const tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.name;
        tituloProducto.classList.add("card-title");

        divProductoHardware.appendChild(imgProducto);
        divProductoHardware.appendChild(tituloProducto);
        
        listadoCompras.appendChild(divProductoHardware);
    })


    //VACIAR CARRITO

    const DOMbotonVaciar = document.querySelector('.boton-vaciar');

    //EVENTOS

    DOMbotonVaciar.addEventListener('click', () => {
        vaciarCarrito();
    })


    function vaciarCarrito() {

        const btnVaciar = document.createElement('div');
        btnVaciar.className = "btn btn-danger boton-vaciar";
        btnVaciar.textContent = "Vaciar carrito";
        btnVaciar.onclick = () => {
            vaciarCarrito(producto.id)
    };
        
        listadoCompras = [];
        // Renderizamos los cambios
        mostrarProductos();
    }
}

