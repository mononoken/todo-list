import { RecordInterface } from "../interfaces";
import Storage from "./storage";

export default abstract class Record implements RecordInterface {
  static readonly STORAGE_KEY: string;
  static readonly NEXT_ID_KEY: string;

  protected static get storage(): Storage<Record> {
    return new Storage<Record>(this.STORAGE_KEY);
  }

  static get all(): Record[] {
    return this.storage.getAll();
  }

  static get(id: number): Record | undefined {
    return this.storage.get(id);
  }

  static push(record: Record) {
    this.storage.push(record);
  }

  static patch(updatedRecord: Record) {
    this.storage.patch(updatedRecord);
  }

  static destroy(targetRecord: Record) {
    this.storage.destroy(targetRecord);
  }

  protected static nextID(): number {
    return this.storage.nextID(this.NEXT_ID_KEY);
  }

  constructor(public id: number) {}
}
