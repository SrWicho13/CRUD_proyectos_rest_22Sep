const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', (req, res) => {
    const projects = projectController.getAllProjects();
    if(projects.length>0)
        res.status(200).json(projects);
    else
        res.status(404).json({code: 404, message:"Projects not found"});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const project = projectController.getProjectById(id);
    res.status(200).json(project);
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const deletedProject = projectController.deleteProject(id);
    res.status(200).json(deletedProject);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, starDate, endDate, status, teamMembers, budget } = req.body;
    const updatedProject = projectController.updateProject(id, name, description, starDate, endDate, status, teamMembers, budget);
    res.status(200).json(updatedProject);
});

router.post('/', (req, res) => {
    const { name, description, starDate, endDate, status, teamMembers, budget } = req.body;
    const newProject = projectController.createProject(name, description, starDate, endDate, status, teamMembers, budget);
    res.status(200).json(newProject);
});

module.exports = router;