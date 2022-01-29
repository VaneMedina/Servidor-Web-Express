const express = require('express')
const Contenedor = require('./main');

const instancia = new Contenedor("./products.json");


//(app) Aplicación servidor 
const app = express()
app.get('/', async (req, res) => {
   res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>\n <h2 style='color: pink'>Para ver todos los productos agregar a la url/productos\n . Para ver un producto random agregar /productoRandom</h2>");
})

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