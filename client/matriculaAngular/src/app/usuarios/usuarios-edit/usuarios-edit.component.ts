import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../../model/Perfil';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuarios-edit.component.html',
  styleUrl: './usuarios-edit.component.css'
})


export class UsuariosEditComponent implements OnInit { //el onInit es para que se ejecute el metodo cuando se inicie el componente
  usuario: Perfil = {
    identificacion: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    telefono: '',
    correo: '',
    tipoUsuario: 'Usuario'
  }; // Crear un objeto usuario con los datos del usuario

  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit(): void {
 // Solicitar los datos del usuario por ID (getbyid)
    const usuarioId = localStorage.getItem('idUsuario');  // Obtener el ID del usuario del almacenamiento local

    if (usuarioId) {
      this.http.get<Perfil>(`http://localhost:3000/usuario/${usuarioId}`).subscribe({
        next: (usuarioData) => {
          this.usuario = usuarioData; // Asignar los datos al objeto usuario
          console.log('Datos del usuario', usuarioData);

        },
        error: (err) => {
          console.error('Error al obtener los datos del usuario', err);
        }
      });
    }
  }

  public editarPerfil(): void {
    const usuarioId = this.usuario.idUsuario;
    if (usuarioId) {
      // Enviar los datos actualizados al servidor
      this.http.put(`http://localhost:3000/usuario/${usuarioId}`, this.usuario).subscribe({
        next: () => {
          console.log('Perfil actualizado con éxito');
          alert('Perfil actualizado con éxito');
        },
        error: (err) => {
          console.error('Error al actualizar el perfil', err);
          alert('Error al actualizar el perfil');
        },
      });
    }
  }
}


