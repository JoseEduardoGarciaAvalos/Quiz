import { List } from "./Base";

export class Opcion {
  constructor(
    public code: number = 0,
    public texto: string = "",
    public codePregunta: number = 0,
    public respuesta: number = 0,
    public userResponse: number = 0,
    public _id?: string
  ) {}

  public isCorrectResponse(): boolean {
    return this.respuesta === this.userResponse;
  }

  public isCorrectResponseByUser(): boolean {
    return this.isSelectedResponseByUser() && this.isCorrectResponse();
  }

  public isErrorResponseByUser(): boolean {
    return this.isSelectedResponseByUser() && !this.isCorrectResponse();
  }

  public isSelectedResponseByUser(): boolean {
    return this.userResponse !== 0;
  }

  public isForgetResponseByUser(): boolean {
    // Es una opcion que olvido el usuario contestar
    return !this.isSelectedResponseByUser() && this.respuesta !== 0;
  }

  public setUserResponse(response: number): void {
    this.userResponse = response;
  }
}

export abstract class OpcionList extends List {
  protected model() {
    return new Opcion();
  }

  public isAllCorrectResponseByUser(): boolean {
    for (let opcion of this.get())
      if (!opcion.isCorrectResponse()) return false;

    return true;
  }

  public get(): Opcion[] {
    return this.models;
  }

  public abstract changeUserResponse(valores): void;
}

export class OpcionUnicaList extends OpcionList {
  public changeUserResponse({ code }): void {
    this.get().forEach((opcion: Opcion) => {
      if (opcion.code === code) opcion.setUserResponse(1);
      else opcion.setUserResponse(0);
    });
  }
}

export class OpcionMultipleList extends OpcionList {
  public changeUserResponse({ code }): void {
    this.get().forEach((opcion: Opcion) => {
      if (opcion.code === code)
        opcion.setUserResponse(opcion.userResponse ? 0 : 1);
    });
  }
}
