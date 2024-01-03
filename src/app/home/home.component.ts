import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemaService } from '../tema.service';
import { CookieService } from 'ngx-cookie-service';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  quizzes: any[] = []
  ativo: boolean = false;
  quizSelecionado: any = null;

  constructor(private router: Router, private temaServico: TemaService, private cookieService: CookieService, private quizServico: QuizService) {}

  ngOnInit(): void {
    if (this.cookieService.get('dark') == 'true') {
      this.ativo = true;
    } else {
      this.ativo = false;
    }
    this.onListar();
  }

  mudarTema(): void {
    let tema;
    if (this.ativo) {
      tema = 'md-dark-deeppurple';
    } else {
      tema = 'md-light-deeppurple';
    }
    this.cookieService.set('dark', this.ativo ? 'true' : 'false');
    this.temaServico.switchTheme(tema);
  }

  creditos(): void {
    this.router.navigate(['/creditos']);
  }

  onListar(): void {
    this.quizServico.getQuizzes().subscribe((quizzes: any) => {
      this.quizzes = quizzes.content;
      console.log(quizzes);
    });
  }

  jogar(quizId: any) {
    this.router.navigate([`/quiz/${quizId}`]);
  }

}
