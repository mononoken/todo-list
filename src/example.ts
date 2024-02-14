import Todo from "./models/todo.ts";
import Project from "./models/project.ts";

export const projects: Project[] = [
  new Project({
    name: "Test Project",
    todos: [
      new Todo({
        name: "something",
      }),
      new Todo({
        name: "something else",
      }),
      new Todo({
        name: "really important!",
      }),
    ],
  }),

  new Project({
    name: "Second Project",
    todos: [
      new Todo({
        name: "in the second project",
      }),
    ],
  }),
];
