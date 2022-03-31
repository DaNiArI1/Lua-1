const mayor = 18

do{
    edad = parseInt(prompt("Ingresa tu edad"))
    mayorDeEdad = edad >= mayor
    if(mayorDeEdad) {
        alert("Todo legal, pasa maquina")

    }else{
        alert("No loco voy a ir preso, raja de aca")
    }
}while(mayorDeEdad)

alert("Que, sigues aqui malditasea?")