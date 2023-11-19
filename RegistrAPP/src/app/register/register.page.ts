import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  email: string = '';
  password: string = '';
  nombreError: string = '';
  apellidoError: string = '';
  rutError: string = '';
  emailError: string = '';
  passwordError: string = '';
  errors: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  clearError(fieldName: string) {
    // ... (sin cambios)
  }

  registerUser() {
    this.errors = [];

    // Validación ...

    if (this.errors.length === 0) {
      const registrationResult = this.authService.register(
        this.nombre,
        this.apellido,
        this.rut,
        this.email,
        this.password
      );
      if (registrationResult === 'Registro exitoso') {
        this.router.navigate(['/login']);
      } else {
        this.errors.push(registrationResult);
      }
    }
  }
}
