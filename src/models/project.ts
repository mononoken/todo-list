import Todo from "./todo.ts";

interface ProjectInterface {
  id: number;
  todos: Todo[];
  name: string;
}

interface ProjectOptions {
  id?: number;
  todos?: Todo[];
  name: string;
}

let idCounter = 0;

export default class Project implements ProjectInterface {
  constructor(
    options: ProjectOptions,
    public id: number = options.id || idCounter++,
    public todos: Todo[] = options.todos || [],
    public name: string = options.name,
  ) {}
}
