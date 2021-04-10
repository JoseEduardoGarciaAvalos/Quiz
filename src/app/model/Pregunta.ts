import { List } from "./Base";
import { OpcionList } from "./Opcion";

export class Pregunta {
  constructor(
    public code: number = 0,
    public texto: string = "",
    public opciones: OpcionList = new OpcionList(),
    public _id?: string
  ) {}
}

export class PreguntaList extends List {
  public model() {
    return new Pregunta();
  }

  public get(): Pregunta[] {
    return this.models;
  }

  public setOpciones(i: number, opciones: OpcionList): void {
    this.models[i].opciones = opciones;
  }

  public getNumberQuestion(): number {
    return this.get().length;
  }

  public getNumberAnsweredCorrectly(): number {
    return this.models.reduce((previous, { opciones }) => {
      return previous + (opciones.isCorrectAnswersByUser() ? 1 : 0);
    }, 0);
  }
}
