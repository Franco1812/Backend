/*
    event routes
    /api/events
*/
const { Router } = require("express")
const { validarJWT } = require("../middlewares/validar-jwt")
const {getEventos, crearEventos, actualizarEventos, eliminarEventos } = require("../controllers/events")
const router = Router();

//Obtener eventos

router.get("/",validarJWT, getEventos );

//Crear eventos

router.post("/",validarJWT, crearEventos );

//Actualizar eventos

router.put("/:id",validarJWT, actualizarEventos );

//borrar eventos

router.delete("/:id",validarJWT, eliminarEventos );

module.exports = router;

