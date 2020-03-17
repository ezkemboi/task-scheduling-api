import { Tasks } from "../models";

export default class TasksService {
  static async getAssignedTasks(pageNo, limit) {
    /**
     * find all tasks
     * get with page limit
     */
    const tasks = await Tasks.findAndCountAll({
      offset: pageNo,
      limit,
      raw: true
    });

    return { tasks, currentPage: pageNo, perPage: limit };
  }
}
