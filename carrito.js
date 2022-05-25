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

//INCORPORANDO CLASES

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

// CARRITO

document.addEventListener('DOMContentLoaded', () => {

    const servicioReparacion = [
        {id:1, name: "Reparacion de PC", price:10000, img:"imagenes/Javascript"}
    ]
    const productosHardware = [
        {id:1, name: "Monitor ", price:65000, img:"imagenes/Javascript/monitor.webp"},
        {id:2, name: "Mouse ", price:1200, img:"imagenes/Javascript/mouse.webp"},
        {id:3, name: "Teclado ", price:5000, img:"imagenes/Javascript/teclado.jpg"},
        {id:4, name: "Camara ", price:21000, img:"imagenes/Javascript/camara.webp"},
        {id:5, name: "Placa de video ", price:200000, img:"imagenes/Javascript/placadevideo.webp"},
        {id:6, name: "HTC VIVE ", price:500000, img:"imagenes/Javascript/htc.webp"},
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
            miNodoBoton.classList.add('btn', 'btn-danger');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
            // Appends
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

        Toastify({
            text: "Añadido a tus compras",
            className: "info",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, rgb(37, 11, 11), rgb(98, 21, 21)",
            }
          }).showToast();
        
        carrito.push(evento.target.getAttribute('marcador'))
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();
    }

    
    function renderizarCarrito() {
        
        DOMcarrito.textContent = '';
       
        const carritoSinDuplicados = [...new Set(carrito)];
        
        carritoSinDuplicados.forEach((item) => {
            
            const miItem = productosHardware.filter((itemproductosHardware) => {
                
                return itemproductosHardware.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
    
                return itemId === item ? total += 1 : total;
            }, 0);
            
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
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        
        DOMtotal.textContent = calcularTotal();
    }

    //Borrar Item

    function borrarItemCarrito(evento) {

        Toastify({
            text: "Item Eliminado",
            className: "info",
            style: {
              background: "linear-gradient(to right, rgb(37, 11, 11), rgb(98, 21, 21)",
            }
          }).showToast();
        
        const id = evento.target.dataset.item;
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();

    }

    //PRECIO TOTAL

    function calcularTotal() {
        
        return carrito.reduce((total, item) => {
            
            const miItem = productosHardware.filter((itemproductosHardware) => {
                return itemproductosHardware.id === parseInt(item);
            });
            // Suma al total
            return total + miItem[0].price;
        }, 0).toFixed(2);
    }

    //VACIAR CARRITO

    function vaciarCarrito() {

        Toastify({
            text: "Vaciaste tu carrito",
            className: "info",
            style: {
              background: "linear-gradient(to right, rgb(37, 11, 11), rgb(98, 21, 21)",
            }
          }).showToast();
        
        carrito = [];
        
        renderizarCarrito();
        
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        
        if (miLocalStorage.getItem('carrito') !== null) {
            
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

const listafetch = document.querySelector ("#listadofetch")

fetch("/futurostock.json")
    .then( resp => resp.json())
    .then ( data => {

        data.forEach( futurostock => {
            const li = document.createElement("li")
            li.innerHTML = `
                <h4>${futurostock.name}</h4>
                <p>${futurostock.price}</p>
            `

            listafetch.appendChild(li)
        })
    })