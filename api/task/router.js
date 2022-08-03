// build your `/api/tasks` router here
const router = require("express").Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const tasks = await db.find();
    res.status(200).send(tasks.map((t) => ({ ...t, task_completed: t.task_completed ? true : false })));
  } catch {
    res.status(500).json({ message: "Could not find projects" });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await db.insert(req.body);
    res.status(201).send({ ...task, task_completed: task.task_completed ? true : false });
  } catch {
    res.status(500).json({ message: "unable to add project" });
  }
});

module.exports = router;
