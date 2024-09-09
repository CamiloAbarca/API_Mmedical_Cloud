import { Router } from "express";
import EquipoController from "../controllers/EquipoController";

const equipoRouters = Router()
const controller = new EquipoController()

equipoRouters.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Origin, X-Requested-With, Authorization");
  next();
});

equipoRouters.get('/', controller.getAll)
equipoRouters.get('/:id', controller.getById)
equipoRouters.post('/', controller.create)
equipoRouters.put('/:id', controller.update)
equipoRouters.delete('/:id', controller.delete)

export default equipoRouters