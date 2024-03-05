import Todo from "../models/todo";

export default function render(todo: Todo) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div>${todo.name}</div>
  `;
  div.dataset.todoId = String(todo.id);

  return div.outerHTML;
}

export class TodoPartial {
  constructor() {}
}
