const express = require('express');
const { getDepartamentos, postDepartamento, putDepartamento, deleteDepartamento } = require('./src/controllers/departamentos');
const { getClientes, postCliente, putCliente, deleteCliente } = require('./src/controllers/clientes');


const app = express();

// setting
app.set('port', 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.get('/departamentos', getDepartamentos);
app.post('/departamentos', postDepartamento);
app.put('/departamentos/:id', putDepartamento);
app.delete('/departamentos/:id', deleteDepartamento);

app.get('/clientes', getClientes);
app.post('/clientes', postCliente);
app.put('/clientes/:id', putCliente);
app.delete('/clientes/:id', deleteCliente);

// running
app.listen(app.get('port'), () => {
    console.log(`Aplicación corriendo en el puerto ${app.get('port')}`);
});