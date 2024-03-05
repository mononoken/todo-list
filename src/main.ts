import "./style.css";
import * as Models from "./models/models.ts";
import Routes from "./routes.ts";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
const contentContainer = document.createElement("div");
contentContainer.id = "content";

appContainer.appendChild(contentContainer);

const exampleProject = new Models.Project("Test", 1, []);
Models.Project.push(exampleProject);

// Routes.get("project", { id: 1 });
Routes.get("newProject");
