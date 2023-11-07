"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../Controllers/userController");
const Router = require('express').Router;
const usersRoutes = Router();
usersRoutes.get('/', userController_1.getAllUsersController);
usersRoutes.post('/', userController_1.addUserController);
usersRoutes.get('/:id', userController_1.getOneUserController);
exports.default = usersRoutes;
