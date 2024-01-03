import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quiz`);
  }
}
