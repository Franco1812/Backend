const response = require("express");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "obtener getEventos",
  });
};

const crearEventos = (req, res = response) => {
    res.json({
      ok: true,
      msg: "obtener crearEventos",
    });
  };


  const actualizarEventos = (req, res = response) => {
    res.json({
      ok: true,
      msg: "obtener actualizarEventos",
    });
  };

const eliminarEventos = (req, res = response) => {
    res.json({
      ok: true,
      msg: "obtener eliminarEventos",
    });
  };

  module.exports = {
    getEventos,
    crearEventos,
    actualizarEventos,
    eliminarEventos
  }