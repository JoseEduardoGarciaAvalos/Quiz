import { EventEmitter, Injectable } from "@angular/core";
import { PreguntaList, Pregunta } from "../model/Pregunta";
import { OpcionList } from "../model/Opcion";

@Injectable({
  providedIn: "root"
})
export class StateAPPService {
  private questions: PreguntaList = new PreguntaList();
  private indexQuestion: number = 0;

  public loadOptions$: EventEmitter<void> = new EventEmitter<void>();

  public startQuiz(data: any): void {
    this.indexQuestion = 0;
    this.questions = new PreguntaList(data);
  }

  public resetQuiz(): void {
    this.indexQuestion = 0;
    this.questions = new PreguntaList();
  }

  public nextQuestion(): void {
    this.indexQuestion++;
  }

  public emitloadedOptions() {
    setTimeout(() => {
      this.loadOptions$.emit();
      console.log("TERMINO");
    }, 10);
  }

  public isFinalQuestion(): boolean {
    return this.indexQuestion === this.questions.get().length - 1;
  }

  public isFineshedQuiz(): boolean {
    return this.indexQuestion >= this.questions.get().length;
  }

  public getIndexCurrentQuestion(): number {
    return this.indexQuestion;
  }

  public getQuestionsList(): PreguntaList {
    return this.questions;
  }

  public getQuestionCurrent(): Pregunta {
    return this.questions.getQuestion(this.indexQuestion);
  }

  public getTypeQuestionCurrent(): number {
    return this.getQuestionCurrent().tipo;
  }

  public putOptionsIntoQuestionCurrent(opciones: OpcionList): void {
    this.getQuestionCurrent().opciones = opciones;
  }

  public getOptionsOfQuestionCurrent(): OpcionList {
    return this.getQuestionCurrent().opciones;
  }
}
