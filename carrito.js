/*NOMBRE DE USUARIO
let nombreUsuario = prompt("Ingresa tu nombre de usuario")

if (nombreUsuario =="") {
    alert("No pusiste nada crack")
}
else {
    alert("Hola " + nombreUsuario)
}

*/

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

/*let paistributario = prompt (" De donde eres " + nombreUsuario + " ?")

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
*/
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

/*const listaComprasIva = []

let cantidadDeCompras = 3

do {
    const listaDeCompras = prompt(" Que te gustaria comprar? ")
    listaComprasIva.push(listaDeCompras)
    console.log(listaComprasIva.length)
} while(listaComprasIva.length != cantidadDeCompras)

const otraListaDeCompras = listaComprasIva.concat([" :esta es tu lista de compras"])
alert(otraListaDeCompras.join(" "))
*/

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

/*while(true) {
    alert("Vamos a hacer una lista de compras")
    const type = prompt("Ingrese el producto que compro")
    
    const compra = new listaDelUsuario(type)
    console.log (compra)

    if(prompt("Compras algo mas?") == "no") {
        break
    }
}
*/

// CARRITO

document.addEventListener('DOMContentLoaded', () => {

    const servicioReparacion = [
        {id:1, name: "Reparacion de PC", price:10000, img:"imagenes/Javascript"}
    ]
    const productosHardware = [
        {id:1, name: "Monitor ", price:65000, img:"imagenes/Javascript/monitor.webp"},
        {id:2, name: "Mouse ", price:1200, img:"imagenes/Javascript/mouse.webp"},
        {id:3, name: "Teclado ", price:5000, img:"imagenes/Javascript/teclado.webp"},
        {id:4, name: "Camara ", price:21000, img:"imagenes/Javascript/camara.webp"},
        {id:5, name: "Placa de video ", price:200000, img:"imagenes/Javascript/placadevideo.webp"},
    ] 
    const productosSoftware = [
        {id:1, name: "Windows Original", price:25000},
        {id:2, name: "Pagina Web", price:80000},
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        productosHardware.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.name;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.img);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.price}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    
    //Evento para añadir un producto al carrito de la compra
    function añadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = productosHardware.filter((itemproductosHardware) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemproductosHardware.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].name} - ${miItem[0].price}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = productosHardware.filter((itemproductosHardware) => {
                return itemproductosHardware.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].price;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});