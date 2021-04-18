import { Opcion, OpcionList } from "src/app/model/Opcion";

export class OptionClassUI {
  constructor(
    public error: boolean = false,
    public correct: boolean = false,
    public forget: boolean = false
  ) {}
}

export interface OpcionListComponent {
  opciones: OpcionList;
  isViewFeedback: boolean;
}

export interface OpcionItemComponent {
  opcion: Opcion;
  class: OptionClassUI;
}
