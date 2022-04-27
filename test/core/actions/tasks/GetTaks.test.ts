import { GetTasks } from "../../../../src/core/actions/tasks/GetTasks";
import { Task } from "../../../../src/core/domain/tasks/Task";

describe("Get Tasks action", () => {

  it("should retrieve an array of tasks", async () => {
    // given
    const action: GetTasks = new GetTasks();

    // when
    const tasks: Task[] = await action.execute();

    // then
    expect(Array.isArray(tasks)).toEqual(true);

  });

  it("should not retrieve finished tasks", async () => {
    const action: GetTasks = new GetTasks();
    const tasks: Task[] = await action.execute();
    const finishedTasks: Task[] = tasks.filter(task => task.finished === true);
    expect(finishedTasks.length).toEqual(0);
  });

})