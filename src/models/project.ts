import { Model, Todo } from "./models";

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

  private static setAll(projects: Project[]) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
