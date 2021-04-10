export abstract class List {
  public models: Array<any>;
  abstract model(): any

  constructor(items = []) {
    this.models = items.map((item) => Object.assign(this.model(), item));
  }
}
