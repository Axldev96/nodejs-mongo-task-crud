import { Router } from "express";

import {
  renderTask,
  addTask,
  editTask,
  editTaskPost,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", addTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", editTaskPost);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
