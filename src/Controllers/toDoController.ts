import { Request, Response } from "express";
import { taskType } from "../Types/taskTypes";
import { addTask, getAllUsersTasks, userTasks } from "../services/toDoServices";


const getAllTasksController = async(req: Request, res: Response) => {
    try{
    const tasks =  await getAllUsersTasks();
    res.status(200).json({ Message: "Success", Data: tasks });
    }catch{
        res.status(400).json({ Message: "Error"});
    }
}
const userTasksController = (req: Request, res: Response) => {
    let myid: number = parseInt(req.params.id)
    const tasks = userTasks(myid);
    if (tasks != undefined && tasks.length > 0)
        res.status(201).json({ Message: "success", Data: tasks });
    else
        res.status(201).json({ Message: "success", Data: "this user has no tasks" })
}


const addTaskController = (req: Request, res: Response) => {
    const task = req.body as taskType;
    addTask(task)
    getAllTasksController(req, res)
}

export { getAllTasksController, addTaskController, userTasksController }