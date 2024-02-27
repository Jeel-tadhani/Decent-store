import * as express from 'express';
import UserController from '../controllers/UserController';
import { authorizeRoles } from '../middleware/verifyToken';

const userRoutes = express.Router();

const Controller = new UserController();

userRoutes.get("/get", authorizeRoles(), Controller.GetUser);

export default userRoutes;