// build your `/api/resources` router here
const router = require("express").Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await db.find();
    res.status(200).send(resources);
  } catch {
    res.status(500).json({ message: "Unable to get resources" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = await db.insert(req.body);
    res.status(201).send(newResource);
  } catch {
    res.status(500).json({ message: "Unable to add resource" });
  }
});

module.exports = router;
