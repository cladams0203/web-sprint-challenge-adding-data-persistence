// build your `/api/projects` router here
const router = require("express").Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(200).send(projects.map((p) => ({ ...p, project_completed: p.project_completed ? true : false })));
  } catch {
    res.status(500).json({ message: "Could not find projects" });
  }
});

router.post("/", async (req, res) => {
  try {
    const project = await db.insert(req.body);
    res.status(201).send({ ...project, project_completed: project.project_completed ? true : false });
  } catch {
    res.status(500).json({ message: "unable to add project" });
  }
});

module.exports = router;
