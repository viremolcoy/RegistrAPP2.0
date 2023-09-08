import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Llama a la función de cierre de sesión del servicio de autenticación
    this.authService.logout();
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/ruta']);
  }

  irMenuhr() {
    this.router.navigate(['/menuhr']);
  }
  
}