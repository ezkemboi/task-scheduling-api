import { TasksService } from "../services";

export default class TasksController {
  static async getAssignedTasks(req, res) {
    // set default;
    let pageNo;
    let pageLimit;

    const { page, limit } = req.query;

    if (!page || page === undefined && !limit || limit === undefined) {
      pageNo = 0;
      pageLimit = 5;
    } else if (!page || page === undefined && limit) {
      pageNo = 0;
    } else if (!limit || limit === undefined && page) {
      pageLimit = 5;
    } else {
      pageNo = page;
      pageLimit = limit;
    }

    const data = await TasksService.getAssignedTasks(pageNo, pageLimit);

    const { tasks, currentPage, perPage } = data;
    const { rows, count } = tasks;

    if (!rows || rows.length < 1) {
      return res.status(404).send({
        error: {
          message: "Tasks not found"
        }
      });
    }
    // return all tasks
    return res.status(200).send({
      totalTasks: count,
      page: currentPage,
      perPage,
      tasks: rows
    });
  }
}
