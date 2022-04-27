import { Task } from "../../domain/tasks/Task";
import { Action } from "../Action";

export class GetTasks implements Action<void, Task[]> {
  execute(params: void): Promise<Task[]> {
    try {
      const tasks: Task[] = [];
      return Promise.resolve(tasks);
    } catch (error) {
      throw new Error(error);
    }
  }

}