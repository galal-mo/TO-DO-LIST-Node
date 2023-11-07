"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTasksController = exports.addTaskController = exports.getAllTasksController = void 0;
const toDoServices_1 = require("../services/toDoServices");
const getAllTasksController = (req, res) => {
    const tasks = (0, toDoServices_1.getAllUsersTasks)();
    res.status(200).json({ Message: "Success", Data: tasks });
};
exports.getAllTasksController = getAllTasksController;
const userTasksController = (req, res) => {
    let myid = parseInt(req.params.id);
    const tasks = (0, toDoServices_1.userTasks)(myid);
    if (tasks != undefined && tasks.length > 0)
        res.status(201).json({ Message: "success", Data: tasks });
    else
        res.status(201).json({ Message: "success", Data: "this user has no tasks" });
};
exports.userTasksController = userTasksController;
const addTaskController = (req, res) => {
    const task = req.body;
    (0, toDoServices_1.addTask)(task);
    getAllTasksController(req, res);
};
exports.addTaskController = addTaskController;
