export default class Todo {
  static readonly STORAGE_LABEL = "todos";
  static readonly NEXT_ID_LABEL = "nextTodoID";

  constructor(
    public name: string,
    public description: string = "",
    public completed: Date | null = null,
    public id: number = Todo.nextID(),
  ) {
    Todo.push(this);
    localStorage.setItem(Todo.NEXT_ID_LABEL, JSON.stringify(id + 1));
  }

  complete(date: Date = new Date()) {
    this.completed = date;

    Todo.patch(this);
  }

  destroy() {
    Todo.destroy(this);
  }

  static isTodo(todo: Todo | undefined): todo is Todo {
    return !!todo;
  }

  static getAll(): Todo[] {
    const todos = localStorage.getItem(Todo.STORAGE_LABEL);

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
    const id = localStorage.getItem(Todo.NEXT_ID_LABEL);

    if (id === null) {
      localStorage.setItem(Todo.NEXT_ID_LABEL, JSON.stringify(1));

      return 1;
    }

    return JSON.parse(id);
  }

  private static setAll(todos: Todo[]) {
    localStorage.setItem(Todo.STORAGE_LABEL, JSON.stringify(todos));
  }
}
