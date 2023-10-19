import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  qrCodeString= 'Mensaje codigo QR';
  scannedResult: any;
  constructor() { }

  ngOnInit() {
  }
  startScan() {}
}
