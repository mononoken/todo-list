import Record from "./record";

export default class Todo extends Record {
  static readonly STORAGE_KEY = "todos";
  static readonly NEXT_ID_KEY = "nextTodoID";

  constructor(
    public name: string,
    public description: string = "",
    public completed: Date | null = null,
  ) {
    super(Todo.nextID());

    Todo.storage.push(this);
    localStorage.setItem(Todo.NEXT_ID_KEY, JSON.stringify(Todo.nextID() + 1));
  }

  complete(date: Date = new Date()) {
    this.completed = date;

    Todo.storage.patch(this);
  }

  destroy() {
    Todo.storage.destroy(this);
  }
}
