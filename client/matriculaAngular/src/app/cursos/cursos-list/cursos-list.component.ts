import { Component, signal } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Perfil } from '../../../model/Perfil';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Curso } from '../../../model/Curso';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [
    MatListModule,
    MatCommonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
  ], // Agrega el módulo de HttpClient para las rutas
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.css',
})
export class CursosListComponent {
  displayedColumns: string[] = [
    'idCurso',
    'materia',
    'docente',
    'estado',
    'accion',
  ];

  cursos = signal<Curso[]>([]);
  dataSource = new MatTableDataSource<Curso>([]);

  constructor(private http: HttpClient, private router: Router) {
    this.metodoGetcurso();
  }

  //obtener los cursos nombres delos docentes y materias
  public metodoGetcurso() {
    const token = localStorage.getItem('token'); // Obtenemos el token de localStorage
    if (!token) {
      console.error('No hay token disponible');
      return;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<Curso[]>('http://localhost:3000/curso/', { headers })
      .subscribe((cursos) => {
        console.log('Cursos obtenidos:', cursos); // Verifica la estructura real

        this.cursos.set(cursos);
        this.dataSource.data = cursos;
      });
  }

  //agregar un curso a la señal
  public agregarCursoALaSenial(curso: Curso) {
    // Creando el nuevo objeto de curso
    let nuevoCurso = {
      idCurso: curso.idCurso,
      idMateria: curso.idMateria,
      idDocente: curso.idDocente,
      aula: curso.aula,
      estado: curso.estado,
      materia: curso.materia,
      docente: curso.docente,
      horario: curso.horario,
    };

    // Agregar el nuevo curso a la lista
    this.cursos.update((cursos) => [...cursos, nuevoCurso]);
    this.dataSource.data = this.cursos();
  }

  //Ruta para editar el curso
  editarCurso(idCurso: number): void {
    // Obtener el curso correspondiente
    const cursoSeleccionado = this.cursos().find((c) => c.idCurso === idCurso);

    if (!cursoSeleccionado) {
      return;
    }

    // Guardar el curso en el localStorage
    localStorage.setItem('idCurso', idCurso.toString());
    // Redirigir al componente de edición
    this.router.navigate(['/cursos/edit', idCurso]); //Asegúrate de que la ruta sea correcta e igual a la que tienes en app.routes.ts
  }
}
