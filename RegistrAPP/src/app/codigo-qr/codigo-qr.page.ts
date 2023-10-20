import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApinombresService } from '../apinombres.service';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {
  qrCodeString = 'Mensaje código QR';
  alumnosRegistrados: number | null = null;
  fecha: string = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  nombresAleatorios: string[] = [];

  constructor(
    private alertController: AlertController,
    private router: Router,
    private apiNombresService: ApinombresService
  ) {}

  ngOnInit() {
    // Inicializa la obtención de nombres aleatorios
    this.apiNombresService.obtenerNombres().subscribe((nombres) => {
      this.nombresAleatorios = nombres;
    });
  }

  async mostrarCantidadEstudiantes() {
    this.alumnosRegistrados = Math.floor(Math.random() * 10) + 1;

    // Obtén la cantidad de nombres correspondiente
    this.apiNombresService.getNombresAleatorios(this.alumnosRegistrados);
  }

  async guardarAsistencia() {
    if (this.alumnosRegistrados !== null) {
      const alert = await this.alertController.create({
        header: 'Resumen de asistencia',
        message: `Alumnos registrados: ${this.alumnosRegistrados}`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              // Navegar a la página /profesor
              this.alumnosRegistrados = null; // Restablecer el contador
              this.router.navigate(['/profesor']);
            },
          },
        ],
      });

      await alert.present();
    }
  }
}
