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
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  registerUser() {
    this.authService.register(this.username, this.password);
    this.router.navigate(['/login']);
    // Redirige a la página de inicio de sesión u otra acción
  }
}
