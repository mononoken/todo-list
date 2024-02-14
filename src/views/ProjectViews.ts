import Project from "./../models/project";

interface ProjectViewsInterface {
  indexRender(project: Project): HTMLDivElement;
}

export default class ProjectViews implements ProjectViewsInterface {
  constructor() {}

  indexRender(project: Project) {
    const div = <HTMLDivElement>document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h1>${project.name}</h1>
    `;

    const ul = <HTMLUListElement>document.createElement("ul");
    ul.classList.add("projects");
    ul.dataset.project = `${project.id}`;
    div.appendChild(ul);

    for (const todo of project.todos) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>${todo.name}</div>
      `;

      ul.appendChild(li);
    }

    return div;
  }
}
