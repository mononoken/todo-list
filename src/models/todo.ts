const storageLabel = "todos";
const nextIDLabel = "nextTodoID";

export default class Todo {
  constructor(
    public name: string,
    public description: string = "",
    public completed: Date | null = null,
    public id: number = Todo.nextID(),
  ) {
    Todo.push(this);
    localStorage.setItem(nextIDLabel, JSON.stringify(id + 1));
  }

  complete(date: Date = new Date()) {
    this.completed = date;

    Todo.patch(this);
  }

  static getAll(): Todo[] {
    const todos = localStorage.getItem(storageLabel);

    if (todos === null) {
      return [];
    }

    return JSON.parse(todos);
  }

  static get(id: number): Todo | undefined {
    const todos = Todo.getAll();

    return todos.find((todo) => todo.id === id);
  }

  static push(todo: Todo) {
    const todos = Todo.getAll();

    this.setAll(todos.concat(todo));
  }

  static patch(updatedTodo: Todo) {
    const todos = Todo.getAll();

    const todoIndex = todos.findIndex((todo) => {
      return todo.id === updatedTodo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = updatedTodo;

    Todo.setAll(updatedTodos);
  }

  static destroy(targetTodo: Todo) {
    const todos = Todo.getAll();

    const todoIndex = todos.findIndex((todo) => {
      return todo.id === targetTodo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);

    Todo.setAll(updatedTodos);
  }

  private static nextID(): number {
    const id = localStorage.getItem(nextIDLabel);

    if (id === null) {
      localStorage.setItem(nextIDLabel, JSON.stringify(1));

      return 1;
    }

    return JSON.parse(id);
  }

  private static setAll(todos: Todo[]) {
    localStorage.setItem(storageLabel, JSON.stringify(todos));
  }
}
