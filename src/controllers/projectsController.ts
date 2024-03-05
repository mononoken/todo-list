import { Project, ProjectParams } from "../models/project.ts";
import ProjectView from "../views/projectViews.ts";

interface ControllerInterface {
  showAction(): void;
  newAction(): void;
}

export class ProjectsController implements ControllerInterface {
  constructor(
    private params: ProjectParams,
    private view: ProjectView = new ProjectView(),
  ) {}

  showAction() {
    const project = Project.get(this.params);

    if (project !== undefined) {
      this.replaceContent(this.view.showRender(project));
    } else {
      console.log("ERROR: project not found");
    }
  }

  newAction(target: HTMLElement = this.getContentContainer()) {
    this.replaceContent(this.view.newRender(), target);
  }

  createAction() {
    const project = new Project(this.params);

    Project.push(project);

  }

  private replaceContent(
    content: HTMLDivElement,
    target: HTMLElement = this.getContentContainer(),
  ) {
    // const contentContainer =
    //   document.querySelector<HTMLDivElement>("#content")!;

    const newContentContainer = document.createElement("div");
    newContentContainer.id = "content";
    newContentContainer.appendChild(content);

    target.replaceWith(newContentContainer);
  }

  private getContentContainer(): HTMLDivElement {
    return document.querySelector<HTMLDivElement>("#content")!;
  }
}
