import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) { }
  //navegar a crear matricula
  crearMatricula() {
    // Lógica para navegar a la página de crear matrícula
    this.router.navigate(['matricula/create']); // Asegúrate de que la ruta sea correcta
    // Aquí puedes usar el router para navegar a la ruta deseada
  }

  historialMatricula() {
    // Lógica para navegar a la página de historial de matrícula
    this.router.navigate(['/historial']); // Asegúrate de que la ruta sea correcta
    // Aquí puedes usar el router para navegar a la ruta deseada
  }

}
