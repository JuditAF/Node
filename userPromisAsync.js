
const { rejects } = require('node:assert');
const { promises } = require('node:dns');
const fs = require('node:fs/promises');
const { resolve } = require('node:path');


let user = {
    name: "Martin",
    surname: "de la Vega",
    age: 34,
};

async function createFile (user) {

    console.log("❌ Deleting file... ");
    await fs.unlink("userAsync.json");
    console.log("✒️ Writing file... ");
    await fs.writeFile("userAsync.json", JSON.stringify(user));
    console.log("📖 Reading file... ");
    const file = await fs.readFile("userAsync.json", "utf-8");
    console.log(JSON.parse(file));

};

createFile (user);