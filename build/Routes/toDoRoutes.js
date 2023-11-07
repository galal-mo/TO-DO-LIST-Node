"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoController_1 = require("../Controllers/toDoController");
const Router = require('express').Router;
const tasksRoutes = Router();
tasksRoutes.get('/', toDoController_1.getAllTasksController);
tasksRoutes.post('/', toDoController_1.addTaskController);
tasksRoutes.get('/:id', toDoController_1.userTasksController);
exports.default = tasksRoutes;
