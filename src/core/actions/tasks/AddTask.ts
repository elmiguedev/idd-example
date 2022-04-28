import { Task } from "../../domain/tasks/Task";
import { TaskService } from "../../domain/tasks/TaskService";
import { Action } from "../Action";

export class AddTask implements Action<AddTaskParams, Task> {

  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public async execute(params: AddTaskParams): Promise<Task> {

    // 1. check if params are not empty
    if (params.title === "" || params.description === "") {
      throw new Error("title and description are required");
    }

    // 2. check if exists task with the same title
    const oldTask = await this.taskService.getTaskByTitle(params.title);
    if (oldTask) {
      throw new Error("Task already exists");
    }

    const task: Task = {
      title: params.title,
      description: params.description,
      finished: false
    }

    const newTask = this.taskService.addTask(task);

    return newTask;
  }
}

export interface AddTaskParams {
  title: string;
  description: string;
}
