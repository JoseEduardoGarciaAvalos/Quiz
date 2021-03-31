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
}
