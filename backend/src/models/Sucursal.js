import mongoose from "mongoose";

const sucursalSchema = mongoose.Schema({
  nombre: String,
  direccion: String,
  ciudad: String,
  estado: String,
  codigoPostal: String,
});

const Sucursal = mongoose.model("Sucursal", sucursalSchema, "sucursales")

export default Sucursal