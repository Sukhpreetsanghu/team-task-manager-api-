require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// Create project (Admin only)
router.post("/", auth, async (req,res)=>{
  if(req.user.role !== "admin")
    return res.status(403).send("Admin only");

  const project = await Project.create({
    name: req.body.name,
    createdBy: req.user.id
  });

  res.json(project);
});

// Get all projects
router.get("/", auth, async (req,res)=>{
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
