const fs = require('fs').promises;

class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
    }
    async getAll(){
        const dataFile = await fs.readFile(this.nameFile);
        const products = JSON.parse(dataFile);
        return products;
    }
}



module.exports = Contenedor