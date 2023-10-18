import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Cambiar el nombre de la variable
  password: string = '';

  constructor(private authService: AuthService, private router: Router, public alertController: AlertController) {}

  async loginUser() {
    const loggedIn = this.authService.login(this.email, this.password); // Cambiar el parámetro a email
    if (loggedIn) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({ // Cambiar el nombre del servicio
        header: 'Datos incorrectos',
        message: 'Por favor seleccione los datos registrados.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      // Manejar error de inicio de sesión
    }
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
  
}
