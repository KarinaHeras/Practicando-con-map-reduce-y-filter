var nombres = ["Africa", "Maria", "Tere", "Paris","Kenia", "India"]
var paises = ["Canada", "Colombia", "Africa", "India", "España"]

function coincide(a, b){
    if(a==b){
        console.log(`${a} son iguales`)
        return a
    }
}

// CON FOREACH
nombres.forEach(nombre => {
    paises.forEach(pais => {
        coincide(nombre, pais)
    });
});

/* === CON MAP  == */
nombres.map(nombre => {
    paises.map(pais => {
        coincide(nombre, pais)
    });
});

/* === CON FILTER == */

nombres.map(nombre => {
    const equals = paises.filter(function(pais){ 
        return pais == nombre }
        ) // ['Africa',,,,,'India']
    if(equals.length > 0){
        console.log(`${equals[0]} son iguales`)
    }
   
})

/* ===  CON REDUCE == */
paises.forEach(pais => {
    nombres.reduce((acumulacion, nombre)=>{
        if(acumulacion == pais){
            console.log(acumulacion)
            return
        }
        if(nombre == pais){
            console.log(nombre)
            return
        }
    
    })  
});