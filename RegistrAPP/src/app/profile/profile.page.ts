import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  email: string = '';

  constructor(private authService: AuthService) {
    this.email = this.authService.getLoggedInEmail();
  }
  alumno1 = {
    carrera: 'Ingenieria en Informatica',
    sexo: 'Masculino',
    direccion: 'Egaña 343'
    
  }
}
