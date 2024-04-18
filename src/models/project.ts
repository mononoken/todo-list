import Todo from "./todo";

const storageLabel = "projects";
const nextIDLabel = "nextProjectID";

export default class Project {
  constructor(
    public name: string,
    private todoIDs: number[] = [],
    public id: number = Project.nextID(),
  ) {
    Project.push(this);
    localStorage.setItem(nextIDLabel, JSON.stringify(id + 1));
  }

  get todos(): Todo[] {
    return this.todoIDs.map((id) => Todo.get(id));
  }

  // push(todo: Todo) {
  //   this.todos.push(todo);
  // }

  static getAll(): Project[] {
    const projects = localStorage.getItem(storageLabel);

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
    const id = localStorage.getItem(nextIDLabel);

    if (id === null) {
      localStorage.setItem(nextIDLabel, JSON.stringify(1));

      return 1;
    }

    return JSON.parse(id);
  }

  private static setAll(projects: Project[]) {
    localStorage.setItem(storageLabel, JSON.stringify(projects));
  }
}
