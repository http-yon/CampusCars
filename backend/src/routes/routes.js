import express from "express";
import Alquiler from "../models/Alquiler.js";
import Automovil from "../models/Automovil.js";
import Cliente from "../models/Cliente.js";
import Empleado from "../models/Empleado.js";
import Reserva from "../models/Reserva.js";
import Sucursal from "../models/Sucursal.js";

const router = express.Router();


///* CRUDS *////////////////////////////////////////////
/* ALQUILERES */
router.get("/alquileresGet", async (req, res) => {
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

router.post("/alquileresPost", async (req, res) => {
  try {

    const x = new Alquiler(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});




/* AUTOMOVILES */
router.get("/automovilesGet", async (req, res) => {
  try {
    const response = await Automovil.find().populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.post("/automovilesPost", async (req, res) => {
  try {

    const x = new Automovil(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});




/* CLIENTES */
router.get("/clientesGet", async (req, res) => {
  try {
    const response = await Cliente.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});


router.post("/clientesPost", async (req, res) => {
  try {

    const x = new Cliente(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});




/* EMPLEADOS */
router.get("/empleadosGet", async (req, res) => {
  try {
    const response = await Empleado.find().populate("sucursalId");

    res.json(response);
  } catch (error) {
    res.json("error");
  }
});


router.post("/empleadosPost", async (req, res) => {
  try {

    const x = new Empleado(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});




/* RESERVAS */
router.get("/reservasGet", async (req, res) => {
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

router.post("/reservasPost", async (req, res) => {
  try {

    const x = new Reserva(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});




/* SUCURSALES */
router.get("/sucursalesGet", async (req, res) => {
  try {
    const response = await Sucursal.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});


router.post("/sucursalPost", async (req, res) => {
  try {

    const x = new Sucursal(req.body)
    await x.save()
    res.json(x)

  } catch (error) {
    console.log(error);
    res.json("error");
  }
});


///////////////////////////////////////////////





export default router;
