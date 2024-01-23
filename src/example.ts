import Todo from "./models/todo.ts";
import Project from "./models/project.ts";

const testTodos = [
  new Todo ({
    name:"something",
  }),
  new Todo ({
    name: "something else",
  }),
  new Todo ({
    name: "really important!",
  })
];

const testProject: Project = {
  id: 0,
  name: "Test Project",
  todos: testTodos,
};

// Test todos
// export default () => {
//   for (const todo of testTodos) {
//     console.log(todo.name)
//   }
// };

// Test project
export default () => {
  console.log("Project contains:")
  for (const todo of testProject.todos) {
    console.log(`${todo.id} ${todo.name}`)
  }
}

// Test
