import mongoose from "mongoose";

const automovilSchema = mongoose.Schema({
  marca: String,
  modelo: String,
  año: Number,
  disponibilidad: Boolean,
  sucursalId: { type: mongoose.Schema.Types.ObjectId, ref: "Sucursal" },
});

const Automovil = mongoose.model("Automovil", automovilSchema, "automoviles");

export default Automovil;