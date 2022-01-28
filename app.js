const http = require('http')

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Chau mundo cruel!')
})

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
