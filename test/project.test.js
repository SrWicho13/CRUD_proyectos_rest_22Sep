const request = require("supertest");
const chai = require ("chai");
const sinon = require("sinon");
const app = require("../index");
const projectController = require("../controllers/projectController");

const expect = chai.expect;

// Verificar que devuelve una lista de proyectos.
describe("GET /Projects", () => {
    it("1. Verificar que devuelve una lista de proyectos", async () => {
        const projects = [
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
        const res = await request(app).get('/projects');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(1);
        expect(res.body).to.deep.equal(projects);
        
    });
});
    
// Verificar que devuelve el proyecto correcto por ID.
describe("GET /projects/:id", () => {
    it('2. Verificar que devuelve el proyecto correcto por ID', async () => {
        const project = 
            {
                id: 1,
                name: "Project 1",
                description: "Project 1 description",
                startDate: "2020-01-01",
                endDate: "2020-12-31",
                status: "en progreso",
                teamMembers: ["Daphne", "Jesus", "Luis"], 
                budget: "$35,000",
            };
        const res = await request(app).get('/projects/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(project);
        
    });
});

// Verificar que se puede crear un proyecto con las nuevas propiedades.
describe("POST /projects/:id", () => {
    it("3. Verifica que se puede crear un proyecto.", async () => {
        const project = 

            {
            name: "Project Prueba Post",
            description: "Project Prueba Post description",
            startDate: "2089-12-12",
            endDate: "20189-12-12",
            status: "en progreso",
            teamMembers: ["Daphne", "Jesus", "Luis"], 
            budget: "$100,000,000",
        };

        const res = await request(app).post('/projects').send(project);
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys('id','name', 'description', 'startDate', 'endDate', 'status', 'teamMembers', 'budget'); });//it
});//descri


// Verificar que se puede actualizar correctamente.
describe('PUT /:id', () => {
    it('4. Verificar que se puede actualizar correctamente', async () => {
        const project = 
            {
                id: 1,
                name: "Project 1 actualizado",
                description: "Project 1 description actualizado",
                startDate: "2020-01-01",
                endDate: "2020-12-31",
                status: "completado",
                teamMembers: ["Daphne", "Jesus", "Luis"], 
                budget: "$40,000",
            };
            const res = await request(app).put('/projects/1').send(project);
            expect(res.body).to.deep.equal(project);
    }); 
});


// Verificar que se puede eliminar un proyecto.
describe('DELETE /:id', () => {
    it('5. Verificar que se puede eliminar un proyecto', async () => {
        
        const res = await request(app).delete('/projects/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ message: 'Proyecto eliminado' });

    }); 
});

// Verificar que la fecha de inicio sea diferente a la fecha de fin.
describe('PUT /', () => {
    it('6. Verificar que la fecha de inicio sea diferente a la fecha de fin', async () => {
      const data = {
        startDate : "2020-01-01",
        endDate : "2020-12-31"
      }     
      const res = await request(app).put('/projects').send(data);
      expect(res.body).to.deep.equal({ message: "La fecha de inicio no puede ser igual a la fecha de fin." });
     });  
})