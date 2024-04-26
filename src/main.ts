import "./style.css";

import Todo from "./models/todo";
import Project from "./models/project";

const appContainer = document.querySelector<HTMLDivElement>("#app")!;
appContainer.innerHTML = "Todo project";

function test(condition: boolean): string {
  return condition ? "pass" : "fail";
}

localStorage.clear();

const tests = [];

const testTodo = new Todo("Test", "this is a test");
const testOne = testTodo.name == "Test";
tests.push(testOne);
console.log(testTodo);
console.log(`test one: ${test(testOne)}`);

const nextTestTodo = new Todo("Another Test", "this is also a test");
console.log(nextTestTodo);
nextTestTodo.complete();
const testTwo = nextTestTodo !== null;
tests.push(testTwo);
console.log(`test two: ${test(testTwo)}`);

const outsideTodo = new Todo("I am outside the project", "not included");
console.log(outsideTodo);

const thirdTodo = new Todo("Third Test", "three is a magic number");
console.log(thirdTodo);

const allTodos = Todo.all;
console.log(allTodos);
const testThree = allTodos.length === 4;
tests.push(testThree);
console.log(`test three: ${test(testThree)}`);

const testProject = new Project("Test Project", [1, 2]);
console.log(testProject);
const projectTodos = testProject.todos; // Error is here
console.log(projectTodos);
const testFour = projectTodos.length === 2;
tests.push(testFour);
console.log(`test four (building a project with todos): ${test(testFour)}`);

testProject.push(thirdTodo);
const updatedProjectTodos = testProject.todos;
console.log(updatedProjectTodos);
const testFive = updatedProjectTodos.length === 3;
tests.push(testFive);
console.log(`test five: ${test(testFive)}`);

outsideTodo.destroy();
const afterDeleteTodos = Todo.all;
const testSix = afterDeleteTodos.length === 3;
tests.push(testSix);
console.log(`test six: ${test(testSix)}`);

const allTests = tests.every((test) => test === true);
console.log(`tests all (${tests.length}): ${test(allTests)}`);
