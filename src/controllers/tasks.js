import { TasksService } from "../services";

export default class TasksController {
  static async getAssignedTasks(req, res) {
    const tasks = await TasksService.getAssignedTasks();

    if (!tasks || tasks.length < 1) {
      res.status(404).send({
        error: {
          message: "Tasks not found"
        }
      });
    }
    // return all tasks
    return res.status(200).send({
      totalTasks: tasks.length,
      tasks
    });
  }
}
