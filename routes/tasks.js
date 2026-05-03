const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Create task
router.post("/", auth, async (req,res)=>{
  const task = await Task.create(req.body);
  res.json(task);
});

// Get all tasks
router.get("/", auth, async (req,res)=>{
  const tasks = await Task.find();
  res.json(tasks);
});

// Update task status
router.put("/:id", auth, async (req,res)=>{
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(task);
});

// Dashboard stats
router.get("/dashboard", auth, async (req,res)=>{
  const tasks = await Task.find();

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t=>t.status==="done").length,
    pending: tasks.filter(t=>t.status==="pending").length,
    overdue: tasks.filter(t=>t.dueDate && t.dueDate < new Date()).length
  };

  res.json(stats);
});

module.exports = router;
Compose:
