import Todo from "./todo";

export default class Project {
  static readonly STORAGE_LABEL = "projects";
  static readonly NEXT_ID_LABEL = "nextProjectID";

  constructor(
    public name: string,
    private todoIDs: number[] = [],
    public id: number = Project.nextID(),
  ) {
    Project.push(this);
    localStorage.setItem(Project.NEXT_ID_LABEL, JSON.stringify(id + 1));
  }

  get todos(): Todo[] {
    return this.todoIDs.map(Todo.get).filter(Todo.isTodo);
  }

  push(todo: Todo) {
    this.todoIDs.push(todo.id);

    Project.patch(this);
  }

  // destroy() {
  //   Project.destroy(this);
  // }

  static getAll(): Project[] {
    const projects = localStorage.getItem(Project.STORAGE_LABEL);

    if (projects === null) {
      return [];
    }

    return JSON.parse(projects);
  }

  static get(id: number): Project | undefined {
    const projects = Project.getAll();

    return projects.find((project) => project.id === id);
  }

  static push(project: Project) {
    const projects = Project.getAll();

    this.setAll(projects.concat(project));
  }

  static patch(updatedProject: Project) {
    const projects = Project.getAll();

    const projectIndex = projects.findIndex((project) => {
      return project.id === updatedProject.id;
    });

    const updatedProjects = [...projects];
    updatedProjects[projectIndex] = updatedProject;

    Project.setAll(updatedProjects);
  }

  private static nextID(): number {
    const id = localStorage.getItem(Project.NEXT_ID_LABEL);

    if (id === null) {
      localStorage.setItem(Project.NEXT_ID_LABEL, JSON.stringify(1));

      return 1;
    }

    return JSON.parse(id);
  }

  private static setAll(projects: Project[]) {
    localStorage.setItem(Project.STORAGE_LABEL, JSON.stringify(projects));
  }
}
