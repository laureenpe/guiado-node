var express= require('express');
var path = require('path');
var app= express();
app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
});
app.listen(8080);

//Importar express y path[1,2]
// Inicializar express [3]
// DEclarar endpoint [4-6]
// INiciar servidor en 8080[7]
app.use('/static',express.static(path.join(__dirname,'node_modules')));
app.use('/static',express.static(path.join(__dirname,'assets')));
