import { taskType } from "../Types/taskTypes";

let taskssData: taskType[] = [
    { Id: 1, Title: "task1", Description: "first U1 task", UserId: 1 },
    { Id: 2, Title: "task2", Description: "2nd U1 task", UserId: 1 },
    { Id: 3, Title: "task3", Description: "3rd U1 task", UserId: 1 },
    { Id: 1, Title: "task1", Description: "1st U2 task", UserId: 2 },
    { Id: 2, Title: "task2", Description: "2nd U2 task", UserId: 2 }
];

const addTask = (task: taskType) => {
    taskssData.push(task)
}


const userTasks = (id: number) => {
    return taskssData.filter(({ UserId }) => UserId == id)
}

const getAllUsersTasks = () => {
    return new Promise((resolve) => {
        resolve(taskssData)
    });
}


export { userTasks, getAllUsersTasks, addTask }


