import { Router } from "express";
import AuthController from '../controllers/AuthController';

const authRoutes = Router()
const controller = new AuthController()

authRoutes.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Origin, X-Requested-With");
    next();
  });

authRoutes.post('/login', controller.login)
authRoutes.post('/register', controller.register)

export default authRoutes