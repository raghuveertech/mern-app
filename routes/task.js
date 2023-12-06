const express = require("express");
const Task = require("./../models/Task");

const router = express.Router();

// get all tasks
// method: GET
// url: /tasks/

router.get("/", async (req, res) => {
  const allTasks = await Task.find();
  res.json(allTasks);
});

// add new task
// method: POST
// url: /tasks/add

router.post("/add", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newTask = new Task({
    title: title,
    description: description,
  });
  await newTask.save();
  const allTasks = await Task.find();
  res.json(allTasks);
});

// get single task
// method: GET
// url: /tasks/:id

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// update single task
// method: PUT
// url: /tasks/:id

router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  const title = req.body.title;
  const description = req.body.description;

  task.title = title;
  task.description = description;

  await task.save();

  const allTasks = await Task.find();
  res.json(allTasks);
});

// delete single task
// method: DELETE
// url: /tasks/:id

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  const allTasks = await Task.find();
  res.json(allTasks);
});

module.exports = router;
