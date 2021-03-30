export class OpcionClass {
  constructor(
    public error: boolean = false,
    public selected: boolean = false,
    public correct: boolean = false
  ) {}
}

export class Opcion {
  constructor(
    public code: number = 0,
    public texto: string = "",
    public codePregunta: number = 0,
    public _id?: string
  ) {}
}
