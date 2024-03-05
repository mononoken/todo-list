export * from "./project";
export * from "./todo";

export class Model {
  protected static findNextID(): number {
    return this.getAll().length + 1;
  }

  static getAll(): Model[] {
    return [];
  }
}
