import { Request, Response } from "express";
import { addUser, getAllUsers, getOneUser } from "../services/userServices";
import { userType } from "../Types/userTypes";


const getAllUsersController = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.status(200).json({ Message: "Success", Data: users });
}

const addUserController = (req: Request, res: Response) => {
    try {
        const user = req.body as userType;
        addUser(user)
        getAllUsersController(req, res)
    }catch{
        res.status(400).json({ Message: "Error"});
    }
}

const getOneUserController = (req: Request, res: Response) => {
    let myid: number = parseInt(req.params.id)
    let user = getOneUser(myid)
    if (user != undefined)
        res.status(201).json({ Message: "success", Data: user });
    else
        res.status(201).json({ Message: "success", Data: "no user with this id" })
}

export { addUserController, getAllUsersController, getOneUserController }