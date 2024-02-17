import "./style.css";
import { projects as exampleProjects } from "./example.ts";
import ProjectController from "./controllers/ProjectController.ts";
import Environment from "./environment.ts";
import renderNav from "./views/partials/nav.ts";

const env: Environment = new Environment();
const projectController: ProjectController = new ProjectController(env);

const appContainer = document.querySelector<HTMLDivElement>("#app")!;

appContainer.appendChild(renderNav(env, projectController));

const contentContainer = document.createElement("div");
contentContainer.id = "content";

appContainer.appendChild(contentContainer);

const activeProject = env.getActiveProject();
if (activeProject === undefined) {
  projectController.newAction();
} else {
  projectController.showAction(activeProject);
}
