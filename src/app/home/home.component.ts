import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TemaService } from '../tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  quizzes: any[] = [
  {title: 'Brasil', description: 'Quiz sobre o país Brasil.', link: '/quiz/brasil', imageUrl: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}, 
  {title: 'Quiz 2', description: 'This is the second quiz', id: 2}, 
  {title: 'Quiz 3', description: 'This is the third quiz', id: 3}
]
  ativo: boolean = false;

  constructor(private router: Router, private temaServico: TemaService) {}

  mudarTema(): void {
    let tema;
    if (this.ativo) {
      tema = 'md-dark-deeppurple';
    } else {
      tema = 'md-light-deeppurple';
    }
    this.temaServico.switchTheme(tema);
  }

  creditos(): void {
    this.router.navigate(['/creditos']);
  }

}
