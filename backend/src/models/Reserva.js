import mongoose from "mongoose";

const reservaSchema = mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  automovilId: { type: mongoose.Schema.Types.ObjectId, ref: "Automovil" },
  fechaInicio: Date,
  fechaFin: Date,
  estado: String, // Por ejemplo: "Pendiente", "Confirmada", etc.
  sucursalId: { type: mongoose.Schema.Types.ObjectId, ref: "Sucursal" },
});

const Reserva = mongoose.model("Reserva", reservaSchema, "reservas")

export default Reserva