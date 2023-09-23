import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  correoElectronico: String,
  sucursalId: { type: mongoose.Schema.Types.ObjectId, ref: "Sucursal" },
  cargo: String
});

const Empleado = mongoose.model("Empleado", empleadoSchema, "empleados") 

export default Empleado