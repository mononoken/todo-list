import * as Controllers from "./controllers/controllers";
import * as Params from "./params";

export default class Routes {
  static get(resource: string, params: Params.ProjectParams = {}) {
    switch (resource) {
      case "project": {
        const controller = new Controllers.ProjectsController(params);
        controller.showAction();
        break;
      }
      case "newProject": {
        const controller = new Controllers.ProjectsController(params);
        controller.newAction();
        break;
      }
      default: {
        console.log("ERROR: resource is not registered for this route");
        break;
      }
    }
  }

  static post(resource: string, params: Params.ProjectParams = {}) {
    switch (resource) {
      case "projects": {
        const controller = new Controllers.ProjectsController(params);
        controller.createAction();
        break;
      }
      default: {
        console.log("ERROR: resource is not registered for this route");
        return;
      }
    }
  }

  // static patch(resource: string) {
  //   switch (resource) {
  //     case "project":
  //       return;
  //     default:
  //       return;
  //   }
  // }
  //
  // static delete(resource: string) {
  //   switch (resource) {
  //     case "project":
  //       return;
  //     default:
  //       return;
  //   }
  // }
}
