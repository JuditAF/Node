
function message (nombre) {
    return `¡Este es el Mensaje ${nombre}!`;
}

console.log(message("1"));

setTimeout(function () {

    console.log("¡Este es el Mensaje 2!")
    console.log(message("3"));
    
    }, 3000);

