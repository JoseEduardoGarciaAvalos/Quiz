export abstract class List {
  protected models: Array<any>;
  protected abstract model(): any;

  constructor(items = []) {
    this.models = items.map((item) => Object.assign(this.model(), item));
  }
}
