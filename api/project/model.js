// build your `Project` model here
const db = require("../../data/dbConfig");

async function find() {
  const projects = await db("projects");
  return projects;
}

async function findById(id) {
  const [found] = await db("projects").where("project_id", id);
  return found;
}

async function insert(project) {
  const [id] = await db("projects").insert(project);
  return await findById(id);
}

module.exports = {
  find,
  findById,
  insert,
};
