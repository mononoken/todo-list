import Record from "./record";
import Todo from "./todo";

export default class Project extends Record {
  static readonly STORAGE_KEY = "projects";
  static readonly NEXT_ID_KEY = "nextProjectID";

  constructor(
    public name: string,
    private todoIDs: number[] = [],
  ) {
    super(Project.nextID());

    Project.storage.push(this);
    localStorage.setItem(
      Project.NEXT_ID_KEY,
      JSON.stringify(Project.nextID() + 1),
    );
  }

  get todos(): Todo[] {
    return this.todoIDs
      .map((id) => Todo.get(id))
      .filter((todo): todo is Todo => !!todo);
  }

  push(todo: Todo) {
    this.todoIDs.push(todo.id);

    Project.storage.patch(this);
  }

  destroy() {
    Project.destroy(this);
  }
}
