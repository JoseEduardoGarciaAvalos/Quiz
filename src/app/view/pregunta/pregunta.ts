import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pregunta",
  templateUrl: "./pregunta.html",
  styleUrls: ["./pregunta.css"]
})
export class PreguntaComponent implements OnInit {
  @Input() texto: string = "";

  constructor() {}

  ngOnInit(): void {}
}
