const express = require('express')
const Contenedor = require('./main');

const instancia = new Contenedor("./products.json");


//(app) Aplicación servidor 
const app = express()

app.get('/productos', async (req, res) => {
   const products = await instancia.getAll();
   res.send(JSON.stringify(products));
})

app.get('/productoRandom', async (req, res) => {
   const products = await instancia.getAll();
   const product = products[Math.floor(Math.random() * products.length)];
   res.send(JSON.stringify(product));
})

const PORT =  process.env.PORT || 8080
const server = app.listen(PORT, () => {
   console.log(`Servidor https escuchando en el puerto ${PORT}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));