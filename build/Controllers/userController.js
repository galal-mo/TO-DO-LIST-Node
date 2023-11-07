"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUserController = exports.getAllUsersController = exports.addUserController = void 0;
const userServices_1 = require("../services/userServices");
const getAllUsersController = (req, res) => {
    const users = (0, userServices_1.getAllUsers)();
    res.status(200).json({ Message: "Success", Data: users });
};
exports.getAllUsersController = getAllUsersController;
const addUserController = (req, res) => {
    const user = req.body;
    (0, userServices_1.addUser)(user);
    getAllUsersController(req, res);
};
exports.addUserController = addUserController;
const getOneUserController = (req, res) => {
    let myid = parseInt(req.params.id);
    let user = (0, userServices_1.getOneUser)(myid);
    if (user != undefined)
        res.status(201).json({ Message: "success", Data: user });
    else
        res.status(201).json({ Message: "success", Data: "no user with this id" });
};
exports.getOneUserController = getOneUserController;
