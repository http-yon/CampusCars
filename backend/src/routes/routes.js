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
/* router.get("/alquileresGet", async (req, res) => {
  try {
    const response = await Alquiler.find()
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}); */

router.post("/alquileresPost", async (req, res) => {
  try {
    const x = new Alquiler(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/alquilerDelete/:id", async (req, res) => {
  try {
    const x = await Alquiler.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/alquileresPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Alquiler.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
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
    const x = new Automovil(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/automovilesDelete/:id", async (req, res) => {
  try {
    const x = await Automovil.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/automovilesPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Automovil.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

/* CLIENTES */
/* router.get("/clientesGet", async (req, res) => {
  try {
    const response = await Cliente.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
}); */

router.post("/clientesPost", async (req, res) => {
  try {
    const x = new Cliente(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/clientesDelete/:id", async (req, res) => {
  try {
    const x = await Cliente.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/clientesPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
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
    const x = new Empleado(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/empleadosDelete/:id", async (req, res) => {
  try {
    const x = await Empleado.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/empleadosPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Empleado.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
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
    const x = new Reserva(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/reservasDelete/:id", async (req, res) => {
  try {
    const x = await Reserva.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/reservasPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Reserva.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
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

router.post("/sucursalesPost", async (req, res) => {
  try {
    const x = new Sucursal(req.body);
    await x.save();
    res.json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.delete("/sucursalesDelete/:id", async (req, res) => {
  try {
    const x = await Alquiler.deleteOne({ _id: req.params.id });
    res.send("eliminado").json(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.put("/sucursalesPut/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const x = await Sucursal.findByIdAndUpdate(id, req.body, { new: true });
    await x.save;
    res.send(x);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

///////////////////////////////////////////////

export default router;

///* ENDPOINTS *//////////////////////////////////////////////

//2. Mostrar todos los clientes registrados en la base de datos.
router.get("/endpoint2", async (req, res) => {
  try {
    const response = await Cliente.find();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
});

//3. Obtener todos los automóviles disponibles para alquiler.
router.get("/endpoint3", async (req, res) => {
  try {
    const response = await Automovil.find({ disponibilidad: true }).populate(
      "sucursalId"
    );

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

//4. Listar todos los alquileres activos junto con los datos de los clientes relacionados.
router.get("/endpoint4", async (req, res) => {
  try {
    //activo == en curso
    const response = await Alquiler.find(
      { estado: "En curso" },
      { automovilId: 0, sucursalId: 0 }
    ).populate("clienteId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

//5. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.
router.get("/endpoint5", async (req, res) => {
  try {
    const response = await Reserva.find(
      { estado: "Pendiente" },
      { sucursalId: 0 }
    )
      .populate("clienteId")
      .populate("automovilId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

//6. Obtener los detalles del alquiler con el ID_Alquiler específico.
router.get("/endpoint6/:id", async (req, res) => {
  try {
    const response = await Alquiler.findOne({ _id: req.params.id })
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//7. Listar los empleados con el cargo de "Vendedor"
router.get("/endpoint7", async (req, res) => {
  try {
    const response = await Empleado.find({ cargo: "Vendedor" }).populate(
      "sucursalId"
    );

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//8. Mostrar la cantidad total de automóviles disponibles en cada sucursal.
router.get("/endpoint8", async (req, res) => {
  try {
    const respuesta = [];
    const sucursales = await Sucursal.find();
    const automoviles = await Automovil.find();

    sucursales.forEach((element) => {
      const result = automoviles.filter(
        (data) => data.sucursalId == String(element._id)
      );
      respuesta.push({
        nombre: element.nombre,
        totalAutos: result.length,
        automoviles: result,
      });
    });

    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//9. Obtener el costo total de un alquiler específico.
router.get("/endpoint9/:id", async (req, res) => {
  try {
    const x = await Alquiler.findOne({ _id: req.params.id })
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    const respuesta = {
      nombre: x.clienteId,
      costo: x.costo,
    };

    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//10.Listar los clientes con el DNI específico.
router.get("/endpoint10/:dni", async (req, res) => {
  try {
    const { dni } = req.params;

    const clientes = await Cliente.find({ DNI: Number(dni) });
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

//11.Mostrar todos los automóviles con una capacidad mayor a 5 personas.
router.get("/endpoint11", async (req, res) => {
  try {
    const response = await Automovil.find({
      capacidad_personas: { $gte: 5 },
    }).populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    console.log(error);
    res.json("error");
  }
});

//12.Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.
router.get("/endpoint12/:fecha", async (req, res) => {
  try {
    const { fecha } = req.params;

    const response = await Alquiler.findOne({ fechaInicio: fecha })
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//13. Listar las reservas pendientes realizadas por un cliente específico.
router.get("/endpoint13/:idCliente", async (req, res) => {
  const { idCliente } = req.params;

  try {
    const reservas = await Reserva.find({ estado: "Pendiente" });

    const x = reservas.filter((data) => String(data.clienteId) === idCliente);

    res.json(x);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error al obtener los datos." });
  }
});

router.get("/endpoint14", async (req, res) => {
  try {
    const response = await Empleado.find({
      $or: [{ cargo: "Gerente" }, { cargo: "Asistente" }],
    }).populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//15.Obtener los datos de los clientes que realizaron almenos un alquiler.
router.get("/endpoint15", async (req, res) => {
  try {
    const response = await Alquiler.aggregate([
      {
        $group: {
          _id: "$clienteId",
          totalAlquileres: { $sum: 1 },
        },
      },
      {
        $match: {
          totalAlquileres: { $gte: 1 },
        },
      },
    ]);

    // Obtén los datos de los clientes que realizaron al menos un alquiler
    const clientesConAlquileres = await Cliente.find({
      _id: { $in: response.map((item) => item._id) },
    });

    res.json(clientesConAlquileres);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//16.Listar todos los automóviles ordenados por marca y modelo.
router.get("/endpoint16", async (req, res) => {
  try {
    const response = await Automovil.find()
      .sort({ marca: 1, modelo: 1 })
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    console.log(error);
    res.json("error");
  }
});

//17. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.
router.get("/endpoint17", async (req, res) => {
  try {
    const response = await Sucursal.aggregate([
      {
        $lookup: {
          from: "automoviles",
          localField: "_id",
          foreignField: "sucursalId",
          as: "automoviles",
        },
      },
      {
        $project: {
          nombre: 1,
          direccion: 1,
          totalAutomoviles: { $size: "$automoviles" },
        },
      },
    ]);

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//18.Obtener la cantidad total de alquileres registrados en la base de datos.
router.get("/alquileresGet", async (req, res) => {
  try {
    const response = await Alquiler.find()
      .populate("clienteId")
      .populate("automovilId")
      .populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//19.Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.
router.get("/endpoint19", async (req, res) => {
  try {
    const response = await Automovil.find({
      capacidad_personas: { $eq: 5 },
      disponibilidad: true,
    }).populate("sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    console.log(error);
    res.json("error");
  }
});
  
//21.Listar los alquileres con fecha de inicio entre'2023-07-05'y'2023-07-10'.
router.get("/endpoint21", async (req, res) => {
  try {
    const response = await Alquiler.find({
      fechaInicio: {
        $gte: "2023-07-05",
        $lte: "2023-07-10",
      },
    }).populate("clienteId automovilId sucursalId");

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
