import Model from "./model";

interface TodoInterface {
  id: number;
  name: string;
}

interface TodoParams {
  id?: number;
  name?: string;
}

export class Todo extends Model implements TodoInterface {
  constructor(
    options: TodoParams,
    public id: number = options.id || Todo.findNextID(),
    public name: string = options.name || "",
  ) {
    super();
  }
}
