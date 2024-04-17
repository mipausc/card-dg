//var son valiables en jss y pueden utiliarse en el documento

var numero=10
var palabra ='hola'
var decimales=10.2
// posiciones a partir del 0
var colecciones =[1,'0',10.3,false,true]

//si pones una valor no existente te lo pone como valor definido
//acceder al valor:
console.log(colecciones[0])
console.log(colecciones[4])

//la llave siempre es string
//llave (cadena): valor(dinamico)
var diccionario={
    "nombre":"Paulina",
    edad:30,
    correo: "misotelo@bb.com",
    status:true,
    photo:null
}

var CHANNELS={
    WHATSAPP:"wa",
    MAIL:"mail",
    TELEFONO:"tel",
    GITHUB:"hithub"  

}
//así es el acceso a valores de un diccionario
console.log(diccionario.correo)
// function <nombre_funcion{}
//bloque de codi
//go específico y se obtiene sólo enun bloque
//las funciones tienen capacidad de recibir parametros
//pueden retornar valor o resultado
function linkdecontacto(event){
    //diccionario - catalogo

    //imprime multiples parametros en consola
    console.log('parament event', event.target.dataset)
//el retorno de un valos se hace por medio de una palabra llamada return
//return 0

//el sig es un codigo que no se ejecutará proque el return frena
//por eso lo marca en color tenue

//console.log('adios')


//contenedor de constante
const dataset=event.target.dataset
    //CONTROL DE FLUJO if
    //=== compara el valor 
    //if(console.log(10==='10'))

    if(dataset.channel === CHANNELS.WHATSAPP){
        console.log('mandar a whastapp')
        const url='https://wa.me/'+ dataset.value
        console.log(url)
        window.open(url)
        return
    }
    if(dataset.channel === CHANNELS.MAIL){
        console.log('mandar a correo')
    }
    if(dataset.channel === CHANNELS.TELEFONO){
        console.log('intentar llamar')
    }
    if(dataset.channel === CHANNELS.GITHUB){
        console.log('mandar a cuenta de github')
    }

}

