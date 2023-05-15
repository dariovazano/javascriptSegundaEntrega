// Saludo inicial

alert("Bienvenido a Wallet White un analisador de gastos\nEn esta ocación vamos a:\n-Crear categorias\n-Agregar gastos de cada categoria\n-Cálculo del total y el porcentaje de cada categoria")

// const categories= ["Vivienda","Alimentación","Transporte"]

// const bills= [
//     {id:1, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:1750},
//     {id:2, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:75},
//     {id:3, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:7},
//     {id:4, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:850},
//     {id:5, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:75},
//     {id:6, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:7},
//     {id:7, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:950},
//     {id:8, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:75},
//     {id:9, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:7}
// ]



const categories = []
const bills = []

// Creo el menúprincipal, que es crear categoria, crear gasto y imprimir resultados

menu1()

function menu1() {
    let a = Number(prompt("¿qué queres hacer? elegí el núemro de la opción:\n1-Agregar categoría\n2-Agragar gasto\n3-Mostrar gasto mensula y porcentajes"))
    a == 1 ? agregarCategoria() :
        a == 2 ? agregarGasto() :
            a == 3 ? imprimirResultados() :
                opcionIncorrecta()
}

// Esta funcion informa que se ha ingresado un valor incorrecto al seleccionar la categoria y vuelve a llamar al menu1
function opcionIncorrecta() {
    alert("Opción no correcta")
    menu1()
}

// Esta funcion crea una categoria
function agregarCategoria() {
    // alert("Agregar Categoría")
    nuevaCatergoria = prompt("¿cuál es el nombre de la nueva categoria?")
    if (categories.indexOf(nuevaCatergoria) == -1) {
        categories.push(nuevaCatergoria)
        alert(`Se creó la categoria ${nuevaCatergoria} con éxito`)
        menu1()
    }
    else {
        alert(`La categoria ${nuevaCatergoria} ya existe`)
        menu1()
    }
}


// Esta funcion crea un gasto
function agregarGasto() {
    // alert("Agregar Gasto")

    if (categories != []) {
        categories.forEach((categoria, i) => {
            if ((Number(prompt(`Si el gasto que queres agregar es de la categoría ${categoria} incica un "1" de lo contrario solo presiona aceptar`))) === 1) {
                const nuevoGasto = {}
                nuevoGasto.id = bills.length + 1
                nuevoGasto.categorie = categoria
                nuevoGasto.fecha = prompt("¿En qué fecha fue?")
                nuevoGasto.coment = prompt("¿Algún comentrio?")
                nuevoGasto.bill = Number(prompt("¿Cuánto gastaste?"))
                bills.push(nuevoGasto)
                alert(`Se ha agragado el gasto ${nuevoGasto.coment} realizado el dia ${nuevoGasto.fecha} de ${nuevoGasto.bill} en la categoria ${categoria}`)
                menu1()
            }
        })
    }
    else if (categories === []) {
        alert(`Creá primero una categoría`)
        menu1()
    }
}



// Esta funcion calcula el total de todos los gastos y tambien calcular el porcentaje de gastos en cada categoria
function imprimirResultados() {
    if (bills.length == 0) {
        alert("Todavía no hay gastos")
        menu1()
    }
    else {
        // alert("imprimir Resultados")
        //Total
        let total = bills.reduce((accum, gasto) => {
            return accum + gasto.bill;
        }, 0);
        var mensaje = `El total gastados es de $${total} y se reparte en los siguientes porcentajes:`
        categories.forEach(categorie => {
            //calculo el porcentaje
            let resultados = bills.filter((producto) => producto.categorie === categorie)
            let porcentaje = resultados.reduce((accum, gasto1) => {
                return accum + gasto1.bill / total;
            }, 0);
            let redondeo = Math.round(porcentaje * 100)
            mensaje = mensaje + `\n ${categorie}: %${redondeo}`
        })
        alert(mensaje)
        menu1()
    }
}
