import Project from "./models/project";

export default class Environment {
  getProjects(): Project[] {
    const projects = JSON.parse(localStorage.getItem("projects") || `""`);

    if (projects === "") {
      return [];
    }

    return projects;
  }

  setProjects(projects: Project[]) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  setNewProject(project: Project) {
    const projects = this.getProjects();

    const updatedProjects = projects.concat(project);

    this.setProjects(updatedProjects);
  }

  setActiveProject(project: Project = this.getProjects()[0]) {
    localStorage.setItem("activeProject", JSON.stringify(project));
  }

  getActiveProject(): Project | undefined {
    const activeProject = localStorage.getItem("activeProject");

    if (activeProject === null) {
      return undefined;
    }

    return JSON.parse(activeProject);
  }
}
