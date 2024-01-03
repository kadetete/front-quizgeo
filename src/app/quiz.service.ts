import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:8080';
  headers = { 'Authorization': `Bearer ${this.cookieService.get('token')}`};

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quiz`, { headers: this.headers });
  }
}
