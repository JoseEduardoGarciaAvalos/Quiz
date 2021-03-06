import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pregunta, PreguntaList } from "src/app/model/Pregunta";
import { Opcion } from "src/app/model/Opcion";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  public preguntas: PreguntaList = new PreguntaList();

  constructor(private http: HttpClient) {}

  /**
   * getQuizes
   */
  public getQuizes(): Observable<any> {
    let url = environment.urlBaseQuizAPI + "api/quiz";

    return this.http.get(url);
  }

  /**
   * getPreguntas
   */
  public getPreguntas(): Observable<Pregunta[]> {
    let url = environment.urlBaseQuizAPI + "api/pregunta";

    return this.http.get<Pregunta[]>(url);
  }

  /**
   * getOpciones
   */
  public getOpciones(codePregunta: number): Observable<Opcion[]> {
    let url = environment.urlBaseQuizAPI + "api/opcion/" + codePregunta;

    return this.http.get<Opcion[]>(url);
  }

  public createQuestion(question: Pregunta): Observable<any> {
    let url = environment.urlBaseQuizAPI + "api/pregunta/";

    let headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(url, question, headers);
  }

  public createOptions(options: Opcion[]): Observable<any> {
    let url = environment.urlBaseQuizAPI + "api/opcion";
    let headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(url, options, headers);
  }
}
