import { Task } from "../../../domain/tasks/Task";
import { TaskService } from "../../../domain/tasks/TaskService";

export class InMemoryTaskService implements TaskService {

  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  public async getTasks(): Promise<Task[]> {
    return this.tasks;
  }

  public async getTaskByTitle(title: string): Promise<Task> {
    return this.tasks.find(task => task.title === title);
  }

  public async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

}