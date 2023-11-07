import express from "express"
import usersRoutes from "./Routes/userRoutes"
import tasksRoutes from "./Routes/toDoRoutes"


const app=express()
app.use(express.json())
app.use("/user",usersRoutes)
app.use("/tasks",tasksRoutes)

app.listen(3000,function(){
    console.log("listening to port 3000");
})