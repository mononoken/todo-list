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
    localStorage.setItem(nextIDLabel, id + 1);
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

  static push(todo) {
    const todos = Todo.getAll();

    this.setAll(todos.concat(todo));
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
