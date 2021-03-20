import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-opcion",
  templateUrl: "./opcion.html",
  styleUrls: ["./opcion.css"]
})
export class OpcionComponent implements OnInit {
  @Input() correlativo: number;
  @Input() texto: string;
  @Input() error: boolean;
  @Input() correct: boolean;

  constructor() {}

  ngOnInit(): void {}
}
