import { Model, Todo } from "./models.ts";

interface ProjectInterface {
  id: number;
  name: string;
  todos: Todo[];
}

export interface ProjectParams {
  name?: string;
  id?: number;
  todos?: Todo[];
}

export class Project extends Model implements ProjectInterface {
  constructor(
    options: ProjectParams,
    public name: string = options.name || "",
    public id: number = options.id || Project.findNextID(),
    public todos: Todo[] = options.todos || [],
  ) {
    super();
  }

  static getAll(): Project[] {
    const projects = JSON.parse(localStorage.getItem("projects") || `""`);

    if (projects === "") {
      return [];
    }

    return projects;
  }

  static get(params: ProjectParams): Project | undefined {
    const projects = Project.getAll();

    if (projects.length === 0 || params.id === undefined) {
      return undefined;
    }

    return projects[params.id];
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
