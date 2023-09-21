import mongoose from "mongoose";

const alquilerSchema = mongoose.Schema({
  clienteId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  automovilId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Automovil' },
  fechaInicio: Date,
  fechaFin: Date,
  estado: String, //"En curso", "Finalizado", etc.
  sucursalId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Sucursal' },
});

const Alquiler = mongoose.model("Alquiler",alquilerSchema, "alquileres")

export default Alquiler
