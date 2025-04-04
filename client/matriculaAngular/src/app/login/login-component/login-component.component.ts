import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  correo: string = '';
  clave: string = '';

  constructor() { } 

  // Método para iniciar sesión
  iniciarSesion() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Correo:', this.correo);
    console.log('Clave:', this.clave);
  }


  //validar token
  validarToken() {
    // Aquí puedes agregar la lógica para validar el token
    console.log('Validando token...');
  }
}
