import { Router } from "express";
import { PersonnelController } from "../controllers";
import { PersonnelMiddlware } from "../middlewares";

const router = new Router();

// POST -> login router
router.route("/login").post(PersonnelMiddlware, PersonnelController.login);

// add error handler

export default router;
