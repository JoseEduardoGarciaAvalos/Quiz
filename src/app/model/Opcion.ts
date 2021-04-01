import { List } from "./Base";

export class OpcionClass {
  constructor(
    public selected: boolean = false,
    public error: boolean = false,
    public correct: boolean = false,
    public forget: boolean = false
  ) {}
}

export class Opcion {
  constructor(
    public code: number = 0,
    public texto: string = "",
    public codePregunta: number = 0,
    public respuesta: number = 0,
    public clases: OpcionClass = new OpcionClass(),
    public _id?: string
  ) {}

  public comprobarOpcion() {
    if (this.clases.selected) {
      this.clases.correct = this.respuesta === 1;
      this.clases.error = this.respuesta !== 1;
    } else this.clases.forget = this.respuesta === 1;
  }
}

export class OpcionList extends List {
  get model() {
    return Opcion;
  }

  public resetSelected() {
    this.models.forEach((opcion: Opcion) => (opcion.clases.selected = false));
  }

  public comprobarOpciones() {
    this.models.forEach((opcion: Opcion) => {
      opcion.comprobarOpcion();
    });
  }

  public getNumRespuestas() {
    return this.models.reduce((previous, { respuesta }) => {
      return previous + respuesta;
    }, 0);
  }

  public getOpciones(): Opcion[] {
    return this.models;
  }
}
