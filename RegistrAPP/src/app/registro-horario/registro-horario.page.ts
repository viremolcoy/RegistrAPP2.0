import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.page.html',
  styleUrls: ['./registro-horario.page.scss'],
})
export class RegistroHorarioPage implements OnInit {

  fecha:string = '';
  fechaActual: string;

  constructor() { 
    this.fechaActual = new Date().toISOString();
  }

  mostrarFecha() {
    this.fecha = (this.fechaActual)
  }

  ngOnInit() {
  }

}
