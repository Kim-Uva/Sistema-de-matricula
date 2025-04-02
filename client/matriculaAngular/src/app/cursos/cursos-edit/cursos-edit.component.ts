import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../../model/Perfil';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Materia } from '../../../model/Materias';
import { Curso } from '../../../model/Curso';

// @Component({
//   selector: 'app-cursos-edit',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './cursos-edit.component.html',
//   styleUrl: './cursos-edit.component.css'
// })
// export class CursosEditComponent implements OnInit{
//   curso: Curso = {
//     idCurso: 0,
//     idMateria: 0,
//     idDocente: 0,
//     aula: '',
//     estado: 'Activo',
//     materia: {
//       idMateria: 0,
//       idPlan: 0,
//       descripcion: '',
//       estado: 'Activo'
//     },
//     docente: {
//       idDocente: 0,
//       idPerfil: 0,
//       perfil: {
//         idPerfil: 0,
//         identificacion: '',
//         nombre: '',
//         apellido1: '',
//         apellido2: '',
//         telefono: '',},
//     horario: Horario
//   };

// }
