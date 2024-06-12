
const readline = require('readline/promises');
const fs = require('fs/promises');


let rl = readline.createInterface(process.stdin, process.stdout);


let user = {
    name: " ",
    surname: " ",
    age: " ",
};


async function createFile () {

    const nombre = await rl.question("What's your name? \n")

    user.name = nombre;
    console.log(`¡Hello ${nombre}! 😄`);
    const apellidos = await rl.question('What are your last names? \n')

    user.surname = apellidos;
    console.log(`⏱️ We are processing your data Mr/Mrs. ${apellidos}... `);
    const edad = await rl.question('How old are you? \n')
         
    user.age = parseInt(edad);
    console.log(`Profile created! ✌️`);
    rl.close();

    await fs.unlink("userAsync.json")
    
    console.log("❌ Deleting file... ");
    await fs.writeFile("userAsync.json", JSON.stringify(user));

    console.log("✒️ Writing file... ");
    const userAsync = await fs.readFile("./userAsync.json", "utf-8");

    console.log("📖 Reading file... ");
    console.log(JSON.parse(userAsync));
          
}

createFile ();