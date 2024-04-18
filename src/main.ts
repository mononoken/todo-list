import "./style.css";
import Todo from "./models/todo";
import Project from "./models/project";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
appContainer.innerHTML = "Todo project";

localStorage.clear();

const testTodo = new Todo("Test", "this is a test");
console.log(testTodo);

const nextTestTodo = new Todo("Another Test", "this is also a test");
console.log(nextTestTodo);
nextTestTodo.complete();
console.log(nextTestTodo);

const outsideTodo = new Todo("I am outside the project", "not included");
console.log(outsideTodo);

const thirdTodo = new Todo("Third Test", "three is a magic number");
console.log(thirdTodo);

console.log(Todo.getAll());

const testProject = new Project("Test Project", [1, 2]);
console.log(testProject);
console.log(testProject.todos);

testProject.push(thirdTodo);
console.log(Project.get(testProject.id));
console.log(testProject.todos);

Todo.destroy(outsideTodo);
console.log(Todo.getAll());
