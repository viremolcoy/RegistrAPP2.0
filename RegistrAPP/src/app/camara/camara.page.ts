import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { BarcodeScanner } = Plugins;
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage{

  constructor() { }

  async scanCode() {
    const result = await BarcodeScanner['scan']();
    if (result.hasContent) {
      // Manejar los datos del código de barras escaneado
      console.log('Barcode data', result.content);
    } else {
      // El escaneo fue cancelado o no se detectó un código de barras
      console.warn('No se detectó un código de barras.');
    }
  }
}