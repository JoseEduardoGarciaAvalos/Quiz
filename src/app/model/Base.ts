export abstract class List {
  protected models: Array<any>;
  protected abstract model(): any;

  constructor(items = []) {
    this.models = items.map((item) => Object.assign(this.model(), item));
  }

  public shuffleItems() {
    this.models.sort((a, b) => {
      return Math.random() - 0.5;
    });
  }
}
