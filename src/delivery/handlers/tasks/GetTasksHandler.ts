import { Request, Response } from "express";
import { GetTasks } from "../../../core/actions/tasks/GetTasks";

export class GetTasksHandler {
  private action: GetTasks;
  constructor(action: GetTasks) {
    this.action = action;
  }

  public async handle(req: Request, res: Response) {
    try {
      console.log("entra aca");
      const tasks = await this.action.execute();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}