import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.page.html',
  styleUrls: ['./registro-horario.page.scss'],
})
export class RegistroHorarioPage {
  fecha: string = '';
  dia: string = '';
  mes: string = '';
  hora: string = '';
  ano: string = ''; // Agrega la variable para el año
  

  constructor() { }

  generarRegistro() {
    const fechaActual = new Date();
    this.fecha = fechaActual.toISOString();
    this.dia = this.capitalizeFirstLetter(fechaActual.toLocaleString('es-ES', { weekday: 'long' }));
    this.mes = this.capitalizeFirstLetter(fechaActual.toLocaleString('es-ES', { month: 'long' }));
    this.hora = fechaActual.toLocaleTimeString();
    this.ano = fechaActual.getFullYear().toString(); // Obtener el año
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
