import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage{

  constructor() {}

  async scanBarcode() {
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      alert(`Código de barras escaneado: ${result.content}`);
    } else {
      alert('Escaneo cancelado o sin contenido.');
    }
  }
}