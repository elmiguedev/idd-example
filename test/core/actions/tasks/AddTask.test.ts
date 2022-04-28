import { AddTask } from "../../../../src/core/actions/tasks/AddTask";
import { Task } from "../../../../src/core/domain/tasks/Task";
import { InMemoryTaskService } from "../../../../src/core/infrastructure/services/tasks/InMemoryTaskService";

describe("Add Task action", () => {

  it("should create a new task with title and description", async () => {
    const taskService = new InMemoryTaskService();
    const action = new AddTask(taskService);
    const addTaskParams = {
      title: "i'm a task",
      description: "yep, i'm a task description"
    };
    const task: Task = await action.execute(addTaskParams);

    expect(task.title).toEqual(addTaskParams.title);
    expect(task.description).toEqual(addTaskParams.description);
  })

  it("should create a new task marked as not finished", async () => {
    const taskService = new InMemoryTaskService();
    const action = new AddTask(taskService);
    const addTaskParams = {
      title: "i'm a task",
      description: "yep, i'm a task description"
    };
    const task: Task = await action.execute(addTaskParams);
    expect(task.finished).toEqual(false);
  })

  it("should throw an error if exists another task with the same title", async () => {
    const taskService = new InMemoryTaskService();
    const action = new AddTask(taskService);
    const addTaskParams = {
      title: "i'm a task",
      description: "yep, i'm a task description"
    };
    const task: Task = await action.execute(addTaskParams);

    expect(async () => {
      await action.execute(addTaskParams);
    }).rejects.toThrowError();
  })

  it("should throw an error if there is not a title or description", async () => {
    const taskService = new InMemoryTaskService();
    const action = new AddTask(taskService);
    const addTaskParams = {
      title: "",
      description: ""
    };

    expect(async () => {
      const task: Task = await action.execute(addTaskParams);
    }).rejects.toThrowError();
  })



})