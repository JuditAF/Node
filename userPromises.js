
const { rejects } = require('node:assert');
const { promises } = require('node:dns');
const fs = require('node:fs/promises');
const { resolve } = require('node:path');


let user = {
    name: "Martin",
    surname: "de la Vega",
    age: 34,
};


function crearFile(user) {

    setTimeout(function () {

        fs.unlink("user.json")
            .then(() => {

                console.log("Eliminando archivo...");
                return fs.writeFile("user.json", JSON.stringify(user))

            })
            .then(() => {

                console.log("Escribiendo archivo...");
                return fs.readFile("user.json", "utf-8")

            })
            .then((user) => {

                console.log("Leyendo el archivo...");
                console.log(JSON.parse(user));
                return fs.readFile("user.json", "utf-8")

            })
            .catch(error => {

                console.log(`La promesa no se ejecutó correctamente. Error: \n${error}`);

            });

    }

    , 500)
};

crearFile(user);