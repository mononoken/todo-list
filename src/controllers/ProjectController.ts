import { Project, ProjectParams } from "../models/project.ts";
import ProjectView from "../views/projectViews.ts";

interface ControllerInterface {
  showAction(): void;
  newAction(): void;
}

export class ProjectController implements ControllerInterface {
  constructor(
    private params: ProjectParams,
    private view: ProjectView = new ProjectView(),
  ) {}

  showAction() {
    const project = Project.get(this.params);
    this.replaceContent(this.view.showRender(project));
  }

  newAction(target: HTMLElement = this.getContentContainer()) {
    const buttonAction = (event: Event) => {
      event.preventDefault();

      const projectParams = {
        name: document.querySelector<HTMLInputElement>("form > input")!.value,
      };

      const project = new Project(projectParams.name);

      Project.push(project);
    };

    this.replaceContent(this.view.newRender(buttonAction), target);
  }

  // create(project: Project) {}

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
