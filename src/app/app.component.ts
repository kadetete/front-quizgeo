import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geoquiz';

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/login']);
  }

  sobre(): void {
    this.router.navigate(['/sobre']);
  }

  home(): void {
    this.router.navigate(['/home']);
  }
}
