
const readline = require('readline/promises');
const fs = require('fs/promises');


let rl = readline.createInterface(process.stdin, process.stdout);


let user = {
    name: " ",
    surname: " ",
    age: " ",
};


function crearFile() {

    rl.question('¿Cuál es tu nombre? \n')
    .then((nombre) => {

        user.name = nombre;
        console.log(`¡Hola ${nombre}! 😄`);
        return rl.question('¿Cuales son tus apellidos? \n')
    })
    .then((apellidos) => {

        user.surname = apellidos;
        console.log(`⏱️ Estamos procesando tus datos Sr/sra. ${apellidos}... `);
        return rl.question('¿Cuántos años tienes? \n')
    })
    .then((edad) => {  
                
        user.age = parseInt(edad);
        console.log(`¡Perfil creado! ✌️`);
        rl.close();

        return fs.unlink("user.json")
    })
    .then(() => {

        console.log("Eliminando archivo...");
        return fs.writeFile("user.json", JSON.stringify(user));

    })
    .then(() => {

        console.log("Escribiendo archivo...");
        return fs.readFile("./user.json", "utf-8");

    })
    .then((user) => {

        console.log("Leyendo el archivo...");
        console.log(JSON.parse(user));
            
    })
    .catch(error => {

        console.log(`La promesa no se ejecutó correctamente. Error: \n${error}`);

    })
          
}

crearFile();