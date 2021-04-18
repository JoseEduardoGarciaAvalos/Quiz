import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { Opcion } from "src/app/model/Opcion";
import { OptionClassUI, OpcionItemComponent } from "../opcionUI";

@Component({
  selector: "app-opcionSimpleItem",
  templateUrl: "./opcionSimpleItem.html",
  styleUrls: ["./opcionSimpleItem.css"]
})
export class OpcionSimpleItemComponent
  implements OpcionItemComponent, OnInit, OnChanges {
  @Input() correlativo: number;
  @Input() opcion: Opcion = new Opcion();
  @Input() isViewFeedback: boolean = false;

  public class: OptionClassUI = new OptionClassUI();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.isViewFeedback) {
      this.class.error = this.opcion.isErrorResponseByUser();
      this.class.correct = this.opcion.isCorrectResponseByUser();
      this.class.forget = this.opcion.isForgetResponseByUser();
    }
  }
}
