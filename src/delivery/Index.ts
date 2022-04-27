import express from "express";
import { GetTasks } from "../core/actions/tasks/GetTasks";
import { GetTasksHandler } from "./handlers/tasks/GetTasksHandler";

const app = express();
app.use(express.json());

const getTasks = new GetTasks();
const getTasksHandler = new GetTasksHandler(getTasks);

console.log("creo las cosas")

app.get("/tasks", getTasksHandler.handle.bind(getTasksHandler));

app.listen(4000, () => console.log("Listening ... "));