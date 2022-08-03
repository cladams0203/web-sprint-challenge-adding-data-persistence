// build your `Task` model here
const db = require("../../data/dbConfig");

async function find() {
  const tasks = await db("tasks").join("projects", "tasks.project_id", "projects.project_id");
  return tasks;
}

async function findById(id) {
  const [found] = await db("tasks").where("task_id", id);
  return found;
}

async function insert(task) {
  const [id] = await db("tasks").insert(task);
  return await findById(id);
}

module.exports = {
  find,
  findById,
  insert,
};
