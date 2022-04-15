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