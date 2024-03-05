import * as Models from "./../../models/models";
import Routes from "../../routes";

export default function renderNav(projects: Models.Project[]) {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <h1>
      Todo App
    </h1>
    <ul class="projects"></ul>
  `;

  const projectsUl = nav.querySelector<HTMLUListElement>("ul.projects")!;
  for (const project of projects) {
    const li = document.createElement("li");
    li.innerHTML = `
      <button data-project="${project.id}">${project.name}</button>
    `;

    li.querySelector<HTMLButtonElement>("button")!.addEventListener(
      "click",
      (event) => {
        event.preventDefault();

        Routes.get("project", { id: project.id });
      },
    );

    projectsUl.appendChild(li);
  }

  return nav;
}
