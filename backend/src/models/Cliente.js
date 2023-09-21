import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  correoElectronico: String,
  telefono: String,
  direccion: String,
  fechaRegistro: Date,
});

const Cliente = mongoose.model("Cliente",clienteSchema, "clientes")

export default Cliente