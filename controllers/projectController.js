let projects = [
    {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        status: "en progreso",
        teamMembers: ["Daphne", "Jesus", "Luis"], 
        budget: "$35,000",
    }
];

function createProject(name, description, startDate, endDate, status, teamMembers, budget) {
    const newProject = {
        id: newID(),
        name,
        description,   
        startDate,
        endDate,
        status,
        teamMembers,
        budget    
    };
    projects.push(newProject);
    return newProject;
}

function getAllProjects() {
    return projects;
}

function getProjectById(id) {
    id = parseInt(id);
    return projects.find(project => project.id == id);    
}

function updateProject(projectToUpdated){
    projectToUpdated.id = parseInt(projectToUpdated.id);
    projects = projects.map(project => {
        if(project.id === projectToUpdated.id){
            return projectToUpdated;
        }
        return project;
    })
}

function deleteProject(id){
    id = parseInt(id);
    return projects = projects.filter(project => project.id !== id);
}

function newID() {
  const maxID = projects.length > 0 ? Math.max(...projects.map(t => t.id)) : 0;
  return maxID + 1;
}

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
}
