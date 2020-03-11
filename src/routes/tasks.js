import { Router } from "express";
import { TasksController } from "../controllers";
import { TasksMiddleware } from "../middlewares";

const router = new Router();

// GET -> get tasks router
router
  .route("/assigned")
  .post(TasksMiddleware, TasksController.getAssignedTasks);

// add error handler

export default router;
