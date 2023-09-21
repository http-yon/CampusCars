import express from "express";
import Alquiler from "../models/Alquiler.js";
import Automovil from "../models/Automovil.js";
import Cliente from "../models/Cliente.js";
import Empleado from "../models/Empleado.js";
import Reserva from "../models/Reserva.js";
import Sucursal from "../models/Sucursal.js";
const router = express.Router();

router.get("/alquileres", async (req, res) => {
  try {
    const response = await Alquiler.find()
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.get("/automoviles", async (req, res) => {
  try {
    const response = await Automovil.find().populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.get("/clientes", async (req, res) => {
  try {
    const response = await Cliente.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});

router.get("/empleados", async (req, res) => {
  try {
    const response = await Empleado.find().populate("sucursalId");

    res.json(response);
  } catch (error) {
    res.json("error");
  }
});

router.get("/reservas", async (req, res) => {
  try {
    const response = await Reserva.find()
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});

router.get("/sucursales", async (req, res) => {
  try {
    const response = await Sucursal.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});

export default router;
