// src/controllers/authController.js
const connection = require('../Public/js/ConexionSQL');

const login = (req, res) => {
    const { numeroIdentificacion, contraseña } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE numero_de_identificacion = ? AND contraseña = ?';
    connection.query(sql, [numeroIdentificacion, contraseña], (error, results) => {
        if (error) {
            console.error('Error al realizar la consulta: ' + error.stack);
            res.status(500).send('Error en el servidor');
            return;
        }

        if (results.length > 0) {
            res.send('Inicio de sesión exitoso');
        } else {
            res.status(401).send('Credenciales incorrectas');
        }
    });
};

module.exports = {
    login
};


