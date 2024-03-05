import "./style.css";
import Routes from "./routes.ts";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
const contentContainer = document.createElement("div");
contentContainer.id = "content";
appContainer.appendChild(contentContainer);

Routes.get("newProject");
