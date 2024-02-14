interface TodoInterface {
  id: number;
  name: string;
}

interface TodoOptions {
  id?: number;
  name: string;
}

let idCounter = 0;

export default class Todo implements TodoInterface {
  constructor(
    options: TodoOptions,
    public id: number = options.id || idCounter++,
    public name: string = options.name,
  ) {}
}
