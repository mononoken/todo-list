import Project from "./../models/project";
import Environment from "./../environment.ts";
import ProjectView from "./../views/ProjectViews.ts";

interface ControllerInterface {
  showAction(project: Project): void;
  newAction(): void;
  // create(project: Project): void;
}

export default class ProjectController implements ControllerInterface {
  constructor(
    private env: Environment,
    private view: ProjectView = new ProjectView(),
  ) {}

  showAction(project: Project) {
    this.replaceContent(this.view.showRender(project));
  }

  newAction(target: HTMLElement = this.getContentContainer()) {
    const buttonAction = (event: Event) => {
      event.preventDefault();

      const projectParams = {
        name: document.querySelector<HTMLInputElement>("form > input")!.value,
      };

      const project = new Project(projectParams);

      this.env.setNewProject(project);
      this.showAction(project);
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
