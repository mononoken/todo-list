import * as Controllers from "./controllers/controllers.ts";
import * as Params from "./params.ts";

export default class Routes {
  static get(key: string, params: Params.ProjectParams = {}) {
    switch (key) {
      case "project": {
        const controller = new Controllers.ProjectController(params);
        controller.showAction();
        break;
      }
      case "newProject": {
        const controller = new Controllers.ProjectController(params);
        controller.newAction();
        break;
      }
      default: {
        console.log("ERROR: key is not registered for this route");
        break;
      }
    }
  }

  // static post(key: string) {
  //   switch (key) {
  //     case "project":
  //       return;
  //     default:
  //       return;
  //   }
  // }
  //
  // static patch(key: string) {
  //   switch (key) {
  //     case "project":
  //       return;
  //     default:
  //       return;
  //   }
  // }
  //
  // static delete(key: string) {
  //   switch (key) {
  //     case "project":
  //       return;
  //     default:
  //       return;
  //   }
  // }
}
