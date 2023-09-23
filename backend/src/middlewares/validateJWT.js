import jwt from 'jsonwebtoken';
import Empleado from '../models/Empleado.js';

const validateJwt = async (req, res, next) => {

  const token = req.header('token-jwt');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { dni } = jwt.verify(token, process.env.JWT);

    const empleado = await Empleado.findOne({ dni });
    if (!empleado) {
      return res.status(401).json({
        msg: 'Token no válido - empleado no existe en la base de datos',
      });
    }

    if (!empleado.estado) {
      return res.status(401).json({
        msg: 'Token no válido - empleado con estado: false',
      });
    }
    req.empleado = empleado;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

export default validateJwt