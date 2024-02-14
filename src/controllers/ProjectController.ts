import Project from "./../models/project";
import ProjectView from "./../views/ProjectViews.ts";

interface ControllerInterface {
  index(): void;
}

interface ProjectControllerOptions {
  project: Project;
  view?: ProjectView;
}

export default class ProjectController implements ControllerInterface {
  private contentContainer = <HTMLDivElement>document.querySelector("#content");

  constructor(
    options: ProjectControllerOptions,
    private project: Project = options.project,
    private view: ProjectView = options.view || new ProjectView(),
  ) {}

  index() {
    this.contentContainer.appendChild(this.view.indexRender(this.project));
  }
}
