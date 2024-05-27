const mysql = require("mysql");

// Configurar la conexion a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Ingeniero_Olivares',
    password: 'Olivares16012004$',
    database: 'Sistema_Bancario'
});

//Conectar a la base de datos
connection.connect((error)=>{
    if(error){

        console.error("Error al Conectar a la Base de Datos: " + error.stack);
        return;
    };
    
    console.log("Conexión exitosa a la base de datos con el ID " + connection.threadId);
});

module.exports = connection;



