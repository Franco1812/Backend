const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Crear sv express
const app = express();

//Base de Datos
dbConnection();

//directorio publico
app.use( express.static("public") );
//lectura del body
app.use( express.json() );

//Rutas
app.use("/api/auth", require("./routes/auth"));
//crud: eventos

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor en puerto ${ process.env.PORT }`);
});
