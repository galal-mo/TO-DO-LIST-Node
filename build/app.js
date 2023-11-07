"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const toDoRoutes_1 = __importDefault(require("./Routes/toDoRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
app.use("/tasks", toDoRoutes_1.default);
app.listen(3000, function () {
    console.log("listening to port 3000");
});
