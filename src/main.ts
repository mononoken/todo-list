import "./style.css";
import Todo from "./models/todo";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
appContainer.innerHTML = "Todo project";

localStorage.clear();

const testTodo = new Todo("Test", "this is a test");
console.log(testTodo);

const nextTestTodo = new Todo("Another Test", "this is also a test");
console.log(nextTestTodo);

const thirdTodo = new Todo("Third Test", "three is a magic number");
console.log(thirdTodo);

const allTodos = Todo.getAll();
console.log(allTodos);
