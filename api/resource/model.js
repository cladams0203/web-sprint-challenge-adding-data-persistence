// build your `Resource` model here
const db = require("../../data/dbConfig");

async function find() {
  const resources = await db("resources");
  return resources;
}

async function findById(id) {
  const [found] = await db("resources").where("resource_id", id);
  return found;
}

async function insert(project) {
  const [id] = await db("resources").insert(project);
  return await findById(id);
}

module.exports = {
  find,
  findById,
  insert,
};
