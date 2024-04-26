import { RecordInterface } from "../interfaces";

export default class Storage<T extends RecordInterface> {
  constructor(public storageTypeKey: string) {}

  getAll(): T[] {
    const records = localStorage.getItem(this.storageTypeKey);

    if (records === null) {
      return [];
    }

    return JSON.parse(records);
  }

  get(id: number): T | undefined {
    const records = this.getAll();

    return records.find((record) => record.id === id);
  }

  push(record: T) {
    const records = this.getAll();

    this.setAll(records.concat(record));
  }

  patch(updatedRecord: T) {
    const records = this.getAll();

    const recordIndex = records.findIndex((record) => {
      return record.id === updatedRecord.id;
    });

    const updatedRecords = [...records];
    updatedRecords[recordIndex] = updatedRecord;

    this.setAll(updatedRecords);
  }

  destroy(targetRecord: T) {
    const records = this.getAll();

    const recordIndex = records.findIndex((record) => {
      return record.id === targetRecord.id;
    });

    const updatedRecords = [...records];
    updatedRecords.splice(recordIndex, 1);

    this.setAll(updatedRecords);
  }

  nextID(nextIDLabel: string): number {
    const id = localStorage.getItem(nextIDLabel);

    if (id === null) {
      localStorage.setItem(nextIDLabel, JSON.stringify(1));

      return 1;
    }

    return JSON.parse(id);
  }

  private setAll(records: T[]) {
    localStorage.setItem(this.storageTypeKey, JSON.stringify(records));
  }
}
