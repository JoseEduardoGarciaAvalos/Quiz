import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { Opcion } from "src/app/model/Opcion";

@Component({
  selector: "app-opcion",
  templateUrl: "./opcion.html",
  styleUrls: ["./opcion.css"]
})
export class OpcionComponent implements OnInit, OnChanges {
  @Input() correlativo: number;
  @Input() opcion: Opcion = new Opcion();
  @Input() isViewFeedback: boolean = false;
  public class = {
    error: false,
    correct: false,
    forget: false
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.class.error =
      this.isViewFeedback && this.opcion.isErrorResponseByUser();
    this.class.correct =
      this.isViewFeedback && this.opcion.isCorrectResponseByUser();
    this.class.forget =
      this.isViewFeedback && this.opcion.isForgetResponseByUser();
  }
}
