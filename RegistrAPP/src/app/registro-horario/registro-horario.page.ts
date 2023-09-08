import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.page.html',
  styleUrls: ['./registro-horario.page.scss'],
})
export class RegistroHorarioPage implements OnInit {

  fecha:string = '';
  dia: string ='';
  mes: string ='';
  ano: string ='';
  hora: string ='';


  constructor() { 
    this.mostrarFecha();
  }

  mostrarFecha() {
    const fechaActual = new Date();
    this.fecha = fechaActual.toISOString();
    this.dia = this.capitalizeFirstLetter(fechaActual.toLocaleString('es-ES', { weekday: 'long' }));
    this.mes = this.capitalizeFirstLetter(fechaActual.toLocaleString('es-ES', { month: 'long' }));
    this.ano = fechaActual.getFullYear().toString();
    this.hora = fechaActual.toLocaleTimeString();
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  ngOnInit() {
  }

}
