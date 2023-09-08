import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.page.html',
  styleUrls: ['./registro-horario.page.scss'],
})
export class RegistroHorarioPage {
  registros: any[] = []; // Array para almacenar los registros
  fecha: string = '';
  dia: string = '';
  mes: string = '';
  hora: string = '';
  ano: string = ''; // Agrega la variable para el año
  mostrarLista:boolean=false;
  

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

  guardarRegistro() {
    // Crear un objeto que representa el registro actual
    const registro = {
      fecha: this.fecha,
      dia: this.dia,
      mes: this.mes,
      ano: this.ano,
      hora: this.hora,
    };

    // Agregar el registro al array de registros
    this.registros.push(registro);

  }



  mostrarRegistros() {
    // Cambia el valor de mostrarLista a verdadero para mostrar la lista de registros
    this.mostrarLista = true;
  }
}
