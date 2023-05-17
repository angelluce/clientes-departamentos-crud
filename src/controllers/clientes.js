const { pool } = require('../database/conexion');
const { setMessage } = require('../utils/messages');
const { setCors } = require('../utils/cors');

const getClientes = async(req, res) => {
    const response = await pool.query('SELECT * FROM private.clientes');
    setCors();
    res.status(200).json(response.rows);
}

const postCliente = async(req, res) => {
    const { nombre, direccion, telefono, departamento } = req.body;
    await pool.query(
        'INSERT INTO private.clientes (nombre_cliente, direccion_cliente, telefono_cliente, id_departamento) ' +
        'VALUES($1, $2, $3, $4)', [nombre, direccion, telefono, departamento]
    );
    setCors();
    res.json({ message: setMessage('cliente', nombre, 'creado') });
}

const putCliente = async(req, res) => {
    const id = req.params.id;
    const { nombre, direccion, telefono, departamento } = req.body;
    await pool.query(
        'UPDATE private.clientes SET nombre_cliente = $1, direccion_cliente = $2, telefono_cliente = $3, id_departamento = $4 WHERE id_cliente = $5', [nombre, direccion, telefono, departamento, id]
    );
    setCors();
    res.json({ message: setMessage('cliente', nombre, 'actualizado') });
}

const deleteCliente = async(req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM private.clientes WHERE id_cliente = $1', [id]);
    setCors();
    res.json({ message: setMessage('cliente', '', 'eliminado') });
}


module.exports = {
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
}