import { Tasks } from "../models";

export default class TasksService {
  static async getAssignedTasks() {
    const tasks = await Tasks.findAll({});
    return tasks;
  }
}
