import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  registerUser() {
    // Validación de RUT: números y "-"
    const rutPattern = /^[0-9]+-[0-9kK]$/;
    if (!rutPattern.test(this.rut)) {
      this.errorMessage = 'Ingresa un RUT válido en el formato: XXXXXXXX-X o XXXXXXXX-k';
      return;
    }

    const registrationResult = this.authService.register(this.nombre, this.apellido, this.rut, this.email, this.password);
    if (registrationResult === 'Registro exitoso') {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = registrationResult;
    }
  }
}
