import { Routes } from '@angular/router';
import { ProvinciaComponent } from './provincia/provincia.component';
import { CantonesComponent } from './cantones/cantones.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from './usuarios/usuarios-edit/usuarios-edit.component';

export const routes: Routes = [
  { path: 'provincias', component: ProvinciaComponent }, // Add the component to the routes
  { path: 'cantones', component: CantonesComponent },

  //Usuarios
  { path: 'usuarios', component: UsuariosListComponent },
  { path: 'usuarios/edit/:id', component: UsuariosEditComponent },
];
