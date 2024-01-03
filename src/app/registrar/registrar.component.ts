import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  usuario = '';
  email = '';
  senha = '';
  invalido = false;

  constructor(private loginService: LoginService, private router: Router) {}

  registrar(): void {
    if (this.usuario != '' || this.email != '' || this.senha != '') {
      this.loginService.novoUsuario(this.usuario, this.email, this.senha).subscribe(
        (res: any) => {
          this.router.navigate(['/login']);
        },
        (err: any) => {
          this.invalido = true;
          console.log(err);
        }
      )
    } else {
      this.invalido = true;
    }
    
  }

}
