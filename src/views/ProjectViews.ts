import Project from "./../models/project";

interface ProjectViewsInterface {
  showRender(project: Project): HTMLDivElement;
}

export default class ProjectViews implements ProjectViewsInterface {
  constructor() {}

  showRender(project: Project) {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h1>${project.name}</h1>
    `;

    const ul = document.createElement("ul");
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

  newRender(buttonAction: (event: MouseEvent) => void) {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h1>New Project</h1>
    `;

    const form = document.createElement("form");
    form.classList.add("project");
    form.innerHTML = `
      <form action="">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Todo List"
          required
        />
        <input type="submit">
      </form>
    `;

    form
      .querySelector<HTMLInputElement>('input[type="submit"]')!
      .addEventListener("click", buttonAction);

    div.appendChild(form);

    return div;
  }
}
