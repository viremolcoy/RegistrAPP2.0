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
    if (fieldName === 'nombreError') {
      this.nombreError = '';
    } else if (fieldName === 'apellidoError') {
      this.apellidoError = '';
    } else if (fieldName === 'rutError') {
      this.rutError = '';
    } else if (fieldName === 'emailError') {
      this.emailError = '';
    } else if (fieldName === 'passwordError') {
      this.passwordError = '';
    }
  }

  registerUser() {
    this.errors = [];

    // Validación de nombre (ejemplo)
    if (this.nombre.length < 5) {
      this.nombreError = 'El nombre debe tener al menos 5 caracteres';
      this.errors.push(this.nombreError);
    }

    // Validación de apellido (ejemplo)
    if (this.apellido.length < 5) {
      this.apellidoError = 'El apellido debe tener al menos 5 caracteres';
      this.errors.push(this.apellidoError);
    }

    // Validación de Rut (ejemplo)
    if (this.rut.length < 9 || this.rut.length > 10) {
      this.rutError = 'El Rut debe ser en formato: XXXXXXXX-X';
      this.errors.push(this.rutError);
    }

    // Validación de correo (ejemplo)
    if (
      !this.email.endsWith('@duocuc.cl') &&
      !this.email.endsWith('@profesor.duoc.cl') &&
      !this.email.endsWith('@adminduoc.cl')
    ) {
      this.emailError = 'Debes ingresar un correo electronico institucional';
      this.errors.push(this.emailError);
    }

    // Validación de contraseña (ejemplo)
    if (this.password.length < 6) {
      this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
      this.errors.push(this.passwordError);
    }

    if (this.errors.length === 0) {
      // Si no hay errores, continuar con el registro
      const registrationResult = this.authService.register(this.nombre, this.apellido, this.rut, this.email, this.password);
      if (registrationResult === 'Registro exitoso') {
        this.router.navigate(['/login']);
      } else {
        this.errors.push(registrationResult);
      }
    }
  }
}
