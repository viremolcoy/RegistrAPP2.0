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
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, public AlertController: AlertController) {}

  async loginUser() {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.router.navigate(['/home']);
    }else {
      const alert = await this.AlertController.create({
        header: 'Datos incorrectos',
        message: 'Porfavor seleccione los datos registrados.',
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
