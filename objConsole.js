
const readline = require('node:readline');
const fs = require('fs');


let rl = readline.createInterface(process.stdin, process.stdout);


let user = {
    name: " ",
    surname: " ",
    age: " ",
};


function crearFile() {

    rl.question('¿Cuál es tu nombre? \n', (nombre)=> {

        user.name = nombre;
        console.log(`¡Hola ${nombre}! 😄`);
        
        rl.question('¿Cuales son tus apellidos? \n', (apellidos)=> {

            user.surname = apellidos;
            console.log(`⏱️ Estamos procesando tus datos Sr/sra. ${apellidos}... `);

            rl.question('¿Cuántos años tienes? \n', (edad)=> {
                
                user.age = parseInt(edad);
                console.log(`¡Perfil creado! ✌️`);
                rl.close();
            });
        });

    });

    setTimeout(function () {

        fs.unlink("user.json", (error) => {

            console.log("Eliminando archivo...");

            if (error) {
                console.log(`Error: ${error}`);
            }

            fs.writeFile("user.json", JSON.stringify(user), (error) => {

                console.log("Escribiendo archivo...");
            
                if (error) {
                    console.log(`Error: ${error}`);
                }

                fs.readFile("./user.json", "utf-8", (error, datosUser) => {

                    console.log("Leyendo el archivo...");
                
                    if (!error) {
                        console.log(JSON.parse(datosUser));
                    } else {
                        console.log(`Error: ${error}`);
                    }
                });
            });
        });
        
    }

    , 15000)

};

crearFile();