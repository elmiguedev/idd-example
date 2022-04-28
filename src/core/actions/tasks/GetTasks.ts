import { Task } from "../../domain/tasks/Task";
import { TaskService } from "../../domain/tasks/TaskService";
import { Action } from "../Action";

export class GetTasks implements Action<void, Task[]> {

  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }


  execute(params: void): Promise<Task[]> {
    try {
      return this.taskService.getTasks();
    } catch (error) {
      throw new Error(error);
    }
  }
}
