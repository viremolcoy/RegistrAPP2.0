import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Agregamos una variable para mensajes de error

  constructor(private router: Router, private authService: AuthService) {}

  registerUser() {
    const registrationResult = this.authService.register(this.username, this.email, this.password);
    if (registrationResult === 'Registro exitoso') {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = registrationResult;
    }
  }
}
