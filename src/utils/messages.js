const setMessage = (entidad, valor, accion) => {
    return `El ${entidad} ${valor} se ha ${accion} correctamente`
}

module.exports = {
    setMessage
}