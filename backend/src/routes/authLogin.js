import { Router } from "express";
import { check } from "express-validator";
import loginEmpleado  from "../auth.js";
import validateDocuments from "../middlewares/validateDocuments.js";

const routerAuth = Router();

routerAuth.post("/",[
    check("dni", "El dni es obligatorio").notEmpty(),
    check("password", "Contra requerida").notEmpty(),
    validateDocuments
  ],loginEmpleado
);

export default routerAuth;
