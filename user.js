
const { log, error } = require('console');
const fs = require('fs');

let user = {
    name: "Martin",
    surname: "de la Vega",
    age: 34,
};


function crearFile(user) {
    setTimeout(function () {

        fs.unlink("user.json", (error) => {

            console.log("Eliminando archivo...");

            if (error) {
                console.log(`Error: ${error}`);
            }
        })
    }

        , 3000)
}

crearFile(user);

fs.writeFile("user.json", JSON.stringify(user), (error) => {

    console.log("Escribiendo archivo...");

    if (error) {
        console.log(`Error: ${error}`);
    }
}),

    fs.readFile("./user.json", "utf-8", (error, datosUser) => {

        console.log("Leyendo el archivo...");

        if (!error) {
            console.log(datosUser);
        } else {
            console.log(`Error: ${error}`);
        }
    });




// OTRA FORMA DE RESOLVER EL EJERCICIO

// fs.unlink("user.json", (error)=> {
//     console.log("Eliminando archivo...");
//     if(error){
//         console.log(`Error: ${error}`);
//     }
// });

// fs.writeFile("user.json", JSON.stringify(user), (error)=> {
//     console.log("Esribiendo archivo...");
//     if(error) {
//         console.log(`Error: ${error}`);
//     }
// });

// fs.readFile("user.json", "utf-8", (error, datosUser)=> {
//     console.log("Leyendo el archivo...");
//     if(!error) {
//         console.log(datosUser);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });