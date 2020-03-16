import { Router } from "express";
import { TasksController } from "../controllers";
import { TasksMiddleware } from "../middlewares";
import { TasksService } from "../services";

const router = new Router();

// GET -> get tasks router
router
  .route("/assigned")
  .post(
    TasksMiddleware,
    TasksService.getAssignedTasks,
    TasksController.getAssignedTasks
  );

// add error handler

export default router;
