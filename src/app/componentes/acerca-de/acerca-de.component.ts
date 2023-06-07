import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  acercaDe:string ='¡No dudes en comunicarte con nosotros!';
  nombre: string = '';
  telefono = '';
  correo = '';
  apellido: string = '';
  mensaje: string = '';

  cambiaDni(valor: string) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.correo = valor;
  }

  onClick() {
    alert('Tu mensaje fue enviado con exito, muchas gracias!');
  }

}
