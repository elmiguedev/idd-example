import { Task } from "./Task";

export interface TaskService {
  addTask(task: Task): Promise<Task>;
  getTaskByTitle(title: string): Promise<Task>;
  getTasks(): Promise<Task[]>;
}