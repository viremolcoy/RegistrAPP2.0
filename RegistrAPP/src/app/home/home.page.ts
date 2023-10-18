import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.email = this.authService.getLoggedInEmail();
  }

  logout() {
    // Llama a la función de cierre de sesión del servicio de autenticación
    this.authService.logout();
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/ruta']);
  }

  irNotis(){
    this.router.navigate(['/notificaciones']);
  }

  irRegasistencia(){
    this.router.navigate(['/registro-horario']);
  }


}


