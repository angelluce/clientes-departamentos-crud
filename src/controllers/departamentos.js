const { pool } = require('../database/conexion');
const { setMessage } = require('../utils/messages');
const { setCors } = require('../utils/cors');

const getDepartamentos = async(req, res) => {
    const response = await pool.query('SELECT * FROM private.departamentos');
    res.set(setCors());
    res.status(200).json(response.rows);
}

const postDepartamento = async(req, res) => {
    const departamento = req.body.departamento;
    await pool.query(
        'INSERT INTO private.departamentos (nombre_departamento) VALUES ($1)', [departamento]
    );
    res.set(setCors());
    res.json({ message: setMessage('departamento', departamento, 'creado') });
}

const putDepartamento = async(req, res) => {
    const id = req.params.id;
    const departamento = req.body.departamento;
    await pool.query(
        'UPDATE private.departamentos SET nombre_departamento = $1 WHERE id_departamento = $2', [departamento, id]
    );
    res.set(setCors());
    res.json({ message: setMessage('departamento', departamento, 'actualizado') });
}

const deleteDepartamento = async(req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM private.departamentos WHERE id_departamento = $1', [id]);
    res.set(setCors());
    res.json({ message: setMessage('departamento', '', 'eliminado') });
}

module.exports = {
    getDepartamentos,
    postDepartamento,
    putDepartamento,
    deleteDepartamento
}