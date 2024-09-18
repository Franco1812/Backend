const express = require("express");
const path = require("path")

const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors")

//Crear sv express
const app = express();

//Base de Datos
dbConnection();

//CORS
app.use(cors());

//directorio publico
app.use( express.static("public") );
//lectura del body
app.use( express.json() );

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.use('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html') );
});

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor en puerto ${ process.env.PORT }`);
});
