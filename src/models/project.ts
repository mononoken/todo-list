interface ProjectInterface {
  id: number,
  name: string,
  todos: Todo[],
}

interface ProjectOptions {
  id?: number;
  name: string;
  todos: Todo[];
}

let idCounter = 0;

export default class Project implements ProjectInterface {
  constructor(
    options: ProjectOptions,
    public id: number = options.id || idCounter++,
    public name: string = options.name,
    public todos: Todo[] = options.todos,
  ) {}
}
