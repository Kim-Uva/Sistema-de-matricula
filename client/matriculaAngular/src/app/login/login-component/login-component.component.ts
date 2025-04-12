import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
})
export class LoginComponentComponent {
  correo: string = '';
  clave: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Método para iniciar sesión
  iniciarSesion() {
    // Llamar al backend para autenticar al usuario
    console.log('Correo:', this.correo);
    console.log('Clave:', this.clave);

    this.http
      .post<any>('http://localhost:3000/usuariologin/autenticar', {
        correo: this.correo,
        clave: this.clave,
      })
      .subscribe({
        next: (res) => {
          console.log('Token recibido:', res.token);
          console.log('ID Usuario recibido:', res.idUsuario);

          localStorage.setItem('token', res.token); 
          localStorage.setItem('idUsuario', res.idUsuario);
          // Ahora que el token está guardado, validamos el token
          this.validarToken();
        },
        error: (err) => {
          console.error('Error al iniciar sesión:', err);
        },
      });
  }

  //validar token
  validarToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No hay token guardado');
      return;
    }

    //Enviar el token generado a headers Authorization
    this.http
      .get<any>('http://localhost:3000/usuariologin/validarToken', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe({
        next: (res) => {
          if (res.valido) {
            //localStorage correo
            localStorage.setItem('correo', this.correo);
            console.log('Token válido');
            alert('Acceso permitido a la página principal');

            // Redirigir al usuario a la página principal
            this.router.navigate(['/inicio']);
          } else {
            alert('No tienes permiso para acceder a esta página');
          }
        },
        error: (err) => {
          console.error('Token inválido ', err);
          alert('Token inválido o expirado ');
        },
      });
  }
}
