import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage { 

usuario: any = {};
fecha: string;

constructor(private authService: AuthService, private router: Router) {
  const email = this.authService.getLoggedInEmail();
  this.usuario = this.authService.getUserByEmail(email);
  
  // Obten la fecha actual en formato DD/MM/YYYY
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  this.fecha = `${day}/${month}/${year}`;
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

irQR(){
  this.router.navigate(['/codigo-qr']);
}




}
