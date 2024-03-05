import "./style.css";
import Routes from "./routes";

import { Project } from "./models/models";
import renderNav from "./views/partials/nav";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;

// Setup navbar
const navBar = renderNav(Project.getAll());
appContainer.appendChild(navBar);

//Setup content container
const contentContainer = document.createElement("div");
contentContainer.id = "content";
appContainer.appendChild(contentContainer);

// Default "root" route
Routes.get("newProject");
