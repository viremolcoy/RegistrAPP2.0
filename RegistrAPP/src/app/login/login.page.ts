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
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Inicio de sesión fallido',
        message: 'El email o la contraseña son incorrectos. Verifica tus datos e intenta nuevamente.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

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
