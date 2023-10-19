import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, public alertController: AlertController) {}

  async loginUser() {
    const loggedIn = this.authService.login(this.email, this.password);

    if (loggedIn) {
      // Obten el email del usuario logueado
      const loggedInEmail = this.authService.getLoggedInEmail();

      // Redirige a diferentes rutas según el dominio del correo electrónico
      if (loggedInEmail.endsWith('@duocuc.cl')) {
        this.router.navigate(['/home']);
      } else if (loggedInEmail.endsWith('@profesor.duoc.cl')) {
        this.router.navigate(['/profesor']);
      } else if (loggedInEmail.endsWith('@adminduoc.cl')) {
        this.router.navigate(['/administrador']);
      } 
    } else {
      // ... manejo del inicio de sesión fallido
    }
  }

  // ... otros métodos


  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Restablecer Contraseña',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico'
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nueva Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            // Llama a la función resetPassword con los datos ingresados
            this.authService.resetPassword(data.email, data.newPassword);
          }
        }
      ]
    });
    await alert.present();
  }
}
