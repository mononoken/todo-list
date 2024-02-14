import "./style.css";
import { projects as exampleProjects } from "./example.ts";
import ProjectController from "./controllers/ProjectController.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <nav>
    <h1>
      Todo App
    </h1>
    <ul class="projects"></ul>
  </nav>
  <div id="content">
  </div>
`;

const projectsNav = document.querySelector<HTMLUListElement>("ul.projects")!;
for (const project of exampleProjects) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div>${project.name}</div>
  `;

  projectsNav.appendChild(li);
}

const projectController: ProjectController = new ProjectController({
  project: exampleProjects[0],
});

projectController.index();
