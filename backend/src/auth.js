import {response} from 'express';
import Empleado from './models/Empleado.js';
import generateJwt from'./helpers/getJWT.js';

const loginEmpleado = async (req, res = response) => {
    const { dni, password } = req.body;
    try {
        const empleado = await Empleado.findOne({ dni });
        console.log('Empleado encontrado:', empleado);

        if (!empleado) {
            return res.status(400).json({
                msg: 'Empleado no encontrado',
            });
        }

        if (password !== empleado.password) {
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            });
        }

        const token = await generateJwt(empleado.id);
        console.log('Token generado:', token);

        res.json({
            empleado,
            token
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({
            msg: 'error en el server'
        });
    }
};

export default loginEmpleado