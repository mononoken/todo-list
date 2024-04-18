import "./style.css";
import Todo from "./models/todo";
import Project from "./models/project";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
appContainer.innerHTML = "Todo project";

localStorage.clear();

const testTodo = new Todo("Test", "this is a test");
console.log(testTodo);

const nextTestTodo = new Todo("Another Test", "this is also a test");
nextTestTodo.complete();
console.log(nextTestTodo);

const thirdTodo = new Todo("Third Test", "three is a magic number");
console.log(thirdTodo);

console.log(Todo.getAll());

const testProject = new Project("Test Project");
console.log(testProject);

Todo.patch(nextTestTodo);
console.log(Todo.getAll());
