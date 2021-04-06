import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "src/app/service/quiz.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.html",
  styleUrls: ["./main.css"]
})
export class MainComponent implements OnInit {
  public quizes = [];

  constructor(private quizS: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizS.getQuizes().subscribe((data) => {
      this.quizes = data;
      this.quizes.push(data[0]);
      this.quizes.push(data[0]);
      this.quizes.push(data[0]);
      this.quizes.push(data[0]);
    });
  }

  public irQuiz(code: number) {
    this.router.navigate(["/quiz", code]);
  }
}
