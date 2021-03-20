import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.html",
  styleUrls: ["./quiz.css"]
})
export class QuizComponent implements OnInit {
  opciones: any = [
    {
      error: true,
      texto:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    },
    {
      selected: true,
      texto:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    },
    {
      correct: true,
      texto:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    },
    {
      texto:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
