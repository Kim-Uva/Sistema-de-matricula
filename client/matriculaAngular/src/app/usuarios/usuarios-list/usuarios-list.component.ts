import { Component, signal } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Perfil } from '../../../model/Perfil';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [MatListModule, MatCommonModule, MatTableModule, MatIconModule, HttpClientModule], // Agrega el módulo de HttpClient para las rutas
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {
  displayedColumns: string[] = ['idUsuario', 'nombre', 'apellido1', 'apellido2', 'correo', 'tipoUsuario', 'acciones'];
  
  usuarios = signal<Perfil[]>([]);
  dataSource = new MatTableDataSource<Perfil>([]); 

  constructor(private http: HttpClient,private router: Router) {
    this.metodoGETPerfil();
  }

  public metodoGETPerfil() {
    this.http.get<Perfil[]>('http://localhost:3000/usuario').subscribe((usuarios) => {
      this.usuarios.set(usuarios); 
      this.dataSource.data = usuarios; 
    });
  }

 
  editarPerfil(idUsuario: number): void {
     // Obtener el perfil correspondiente
  const usuarioSeleccionado = this.usuarios().find(u => u.idUsuario === idUsuario);
  
  if (!usuarioSeleccionado) {
    return;
  }

  // Guardar el usuario en el localStorage
  localStorage.setItem('idUsuario', idUsuario.toString());
  // Redirigir al componente de edición
  this.router.navigate(['/usuarios/edit', idUsuario]); //Asegúrate de que la ruta sea correcta e igual a la que tienes en app.routes.ts
}

  public agregarUsuarioALaSenial(usuario: Perfil) {
    // Creando el nuevo objeto de usuario
    let nuevoUsuario = {
      idUsuario: usuario.idUsuario,
      identificacion: usuario.identificacion,
      nombre: usuario.nombre,
      apellido1: usuario.apellido1,
      apellido2: usuario.apellido2,
      telefono: usuario.telefono,
      correo: usuario.correo,
      tipoUsuario: usuario.tipoUsuario,
      docente: usuario.docente,  // Si existe
      estudiante: usuario.estudiante  // Si existe
    };
  
    
    // Agregar el nuevo usuario a la lista
    this.usuarios.update(usuarios => [...usuarios, nuevoUsuario]);
    this.dataSource.data = this.usuarios();
  }
}

