import mongoose from "mongoose";

const alquilerSchema = mongoose.Schema({
  clienteId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  automovilId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Automovil' },
  fechaInicio: String,
  fechaFin: String,
  estado: String, //"En curso", "Finalizado"
  sucursalId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Sucursal' },
  costo:Number
});

const Alquiler = mongoose.model("Alquiler",alquilerSchema, "alquileres")

export default Alquiler
