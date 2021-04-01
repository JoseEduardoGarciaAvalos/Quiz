export class List {
  public models: Array<any>;

  constructor(items = []) {
    this.models = items.map((item) => Object.assign(new this.model(), item));
  }
}
