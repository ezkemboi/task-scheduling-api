import { Router } from "express";
import PersonnelRouter from "./personnel";
import TasksRouter from "./tasks";

const router = new Router();

// index -> root endpoint
router.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to Task Scheduling"
  });
});

router.use("/personnel", PersonnelRouter);
router.use("/tasks", TasksRouter);

export default router;
