import { Component, Input, OnInit } from "@angular/core";
import { Opcion, OpcionClass } from "src/app/model/Opcion";

@Component({
  selector: "app-opcion",
  templateUrl: "./opcion.html",
  styleUrls: ["./opcion.css"]
})
export class OpcionComponent implements OnInit {
  @Input() correlativo: number;
  @Input() opcion: Opcion = new Opcion();
  @Input() clases: OpcionClass = new OpcionClass();

  constructor() {}

  ngOnInit(): void {}
}
