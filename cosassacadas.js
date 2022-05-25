for (let i = 1; i <= 5; i++) {

    alert(" Turno N "+i+" para "+nombreUsuario)
    break
}


const antivirus = [
    {name: "AVAST", price: 10.000},
    {name: "DEFENDER", price: 11.000},
    {name: "AVG", price: 12.000},
    {name: "PANDA", price: 13.000},
    {name: "NORTON", price: 14.000},
]

const filtroAntivirus = antivirus.filter( c => c.name.includes(prompt("Que antivirus te gusta? ")))

//OTRO CARRITO
let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
       
    });
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
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);


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

fetch("aca la url")
    .then((response) => {
        console.log(response)
        console.log(response.status)
        if(response.status != 200) {
            throw new Error ("Error en la peticion")
        }

        console.log("Peticion finalizada")
        return response.json()
    })
    .then((json) => {
        console.log("Mostrando la informacion")
        console.log(json)
    })

    /*NOMBRE DE USUARIO
let nombreUsuario = prompt("Ingresa tu nombre de usuario")

if (nombreUsuario =="") {
    alert("No pusiste nada crack")
}
else {
    alert("Hola " + nombreUsuario)
}

*/


//FUNCION CONCATENADA

function concatenar(var1, var2) {
    console.log ("Concatenando...")
    console.log(var1 + " " + var2)
    console.log ("Concatenado")
}

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