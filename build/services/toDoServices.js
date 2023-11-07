"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.getAllUsersTasks = exports.userTasks = void 0;
let taskssData = [
    { Id: 1, Title: "task1", Description: "first galal task", UserId: 1 },
    { Id: 2, Title: "task2", Description: "2nd galal task", UserId: 1 },
    { Id: 3, Title: "task3", Description: "3rd galal task", UserId: 1 },
    { Id: 1, Title: "task1", Description: "1st boules task", UserId: 2 },
    { Id: 2, Title: "task2", Description: "2nd boules task", UserId: 2 }
];
const addTask = (task) => {
    taskssData.push(task);
};
exports.addTask = addTask;
const userTasks = (id) => {
    return taskssData.filter(({ UserId }) => UserId == id);
};
exports.userTasks = userTasks;
const getAllUsersTasks = () => {
    return taskssData;
};
exports.getAllUsersTasks = getAllUsersTasks;
