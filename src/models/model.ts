export default class Model {
  protected static findNextID(): number {
    const models = this.getAll();

    if (models.length === 0) {
      return 0;
    } else {
      return models.length;
    }
  }

  static getAll(): Model[] {
    return [];
  }
}
