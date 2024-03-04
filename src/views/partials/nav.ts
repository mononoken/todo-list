import Environment from "./../../environment";
import ProjectController from "./../../controllers/ProjectController.ts";

export default function renderNav(
  env: Environment,
  projectController: ProjectController,
) {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <h1>
      Todo App
    </h1>
    <ul class="projects"></ul>
  `;

  const projectsUl = nav.querySelector<HTMLUListElement>("ul.projects")!;
  for (const project of env.getProjects()) {
    const li = document.createElement("li");
    li.innerHTML = `
      <button data-project="${project.id}">${project.name}</button>
    `;

    li.querySelector<HTMLButtonElement>("button")!.addEventListener(
      "click",
      (event) => {
        event.preventDefault();

        env.setActiveProject(project);
        projectController.showAction(project);
      },
    );

    projectsUl.appendChild(li);
  }

  const li = document.createElement("li");
  const newProjectBtn = document.createElement("button");
  newProjectBtn.innerHTML = "New Project";
  newProjectBtn.id = "new-project";
  newProjectBtn.addEventListener("click", () => {
    // Show new project form
    projectController.newAction(newProjectBtn);
  });

  li.appendChild(newProjectBtn);
  projectsUl.appendChild(li);

  return nav;
}
