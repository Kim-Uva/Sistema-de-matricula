import { Routes } from '@angular/router';
import { ProvinciaComponent } from './provincia/provincia.component';
import { CantonesComponent } from './cantones/cantones.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from './usuarios/usuarios-edit/usuarios-edit.component';
import { CursosListComponent } from './cursos/cursos-list/cursos-list.component';
import { MateriasListComponent } from './materia/materias-list/materias-list.component';
import { HistorialListComponent } from './historial/historial-list/historial-list.component';
import { MateriasEditComponent } from './materia/materias-edit/materias-edit.component';
import { CursosEditComponent } from './cursos/cursos-edit/cursos-edit.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { CrearMatriculaComponent } from './matricula/crear-matricula/crear-matricula.component';

export const routes: Routes = [
  //login
  { path: '', component: LoginComponentComponent },

  //inicio
  { path: 'inicio', component: InicioComponent },

  { path: 'provincias', component: ProvinciaComponent }, // Add the component to the routes
  { path: 'cantones', component: CantonesComponent },

  //Usuarios
  { path: 'usuarios', component: UsuariosListComponent },
  { path: 'usuarios/edit/:id', component: UsuariosEditComponent },

  //Cursos
  { path: 'cursos', component: CursosListComponent },
  { path: 'cursos/edit/:id', component: CursosEditComponent },

  //materias
  { path: 'materias', component: MateriasListComponent },
  { path: 'materias/edit/:id', component: MateriasEditComponent },

  // Historial
  { path: 'historial', component: HistorialListComponent },


  //Procesos

  //Matricula
  { path: 'matricula/create', component: CrearMatriculaComponent },
];
