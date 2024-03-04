import Todo from "./todo.ts";

interface ProjectInterface {
  id: number;
  todos: Todo[];
  name: string;
}

let idCounter = 0;

export default class Project implements ProjectInterface {
  constructor(
    public id: number = idCounter++,
    public todos: Todo[] = [],
    public name: string,
  ) {}

  static getAll(): Project[] {
    const projects = JSON.parse(localStorage.getItem("projects") || `""`);

    if (projects === "") {
      return [];
    }

    return projects;
  }

  static push(project: Project) {
    const projects = Project.getAll();

    const updatedProjects = projects.concat(project);

    this.setAll(updatedProjects);
  }

  static setActive(project: Project = this.getAll()[0]) {
    localStorage.setItem("activeProject", JSON.stringify(project));
  }

  static getActive(): Project | undefined {
    const activeProject = localStorage.getItem("activeProject");

    if (activeProject === null) {
      return undefined;
    }

    return JSON.parse(activeProject);
  }

  private static setAll(projects: Project[]) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
