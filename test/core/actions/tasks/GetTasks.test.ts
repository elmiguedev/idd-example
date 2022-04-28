import { GetTasks } from "../../../../src/core/actions/tasks/GetTasks";
import { Task } from "../../../../src/core/domain/tasks/Task";
import { TaskService } from "../../../../src/core/domain/tasks/TaskService";
import { InMemoryTaskService } from "../../../../src/core/infrastructure/services/tasks/InMemoryTaskService";

describe("Get Tasks action", () => {

  it("should retrieve an array of tasks", async () => {
    // given
    const taskService: TaskService = new InMemoryTaskService();
    const action: GetTasks = new GetTasks(taskService);

    // when
    const tasks: Task[] = await action.execute();

    // then
    expect(Array.isArray(tasks)).toEqual(true);

  });

  it("should not retrieve finished tasks", async () => {
    const taskService: TaskService = new InMemoryTaskService();
    const action: GetTasks = new GetTasks(taskService);

    const tasks: Task[] = await action.execute();
    const finishedTasks: Task[] = tasks.filter(task => task.finished === true);

    expect(finishedTasks.length).toEqual(0);
  });

  it("should retrieve task from a repository", async () => {
    // given
    const taskService: TaskService = {
      addTask: jest.fn(),
      getTaskByTitle: jest.fn(),
      getTasks: jest.fn()
    }

    const action: GetTasks = new GetTasks(taskService);

    // when
    const tasks: Task[] = await action.execute();

    // then
    expect(taskService.getTasks).toHaveBeenCalled();

  });

})