import "./style.css";
import { project as exampleProject } from "./example.ts"; // DELETE_ME
import ProjectController from "./controllers/ProjectController.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>
    Todo App
  </h1>
  <div id="content">
  </div>
`;

const controller: ProjectController = new ProjectController({
  project: exampleProject,
});

controller.index();
