// controller for tasks in
export default class TasksController {
  static getAssignedTasks(req, res) {
    return res.status(200).send({
      message: "Tasks retrieved successfully"
    });
  }
}
