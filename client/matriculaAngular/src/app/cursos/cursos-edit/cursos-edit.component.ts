import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../../model/Perfil';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Materia } from '../../../model/Materias';
import { Curso } from '../../../model/Curso';
import { CommonModule } from '@angular/common';
import { Docente } from '../../../model/Docente';
import { Horario } from '../../../model/Horario';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-cursos-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './cursos-edit.component.html',
  styleUrls: ['./cursos-edit.component.css']
})
export class CursosEditComponent implements OnInit {

  
  showHorarioForm: boolean = false;

  curso: Curso = {
    idCurso: 0,
    idMateria: 0,
    idDocente: 0,
    aula: '',
    estado: 'Activo',
    materia: {
      idMateria: 0,
      idPlan: 0,
      descripcion: '',
      estado: 'Activo'
    },
    docente: {
      idDocente: 0,
      idPerfil: 0,
      perfil: {
        idUsuario: 0,
        identificacion: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        telefono: '',
        correo: '',
        tipoUsuario: 'Docente'
      }
    },
    horario: [] as Horario[],  
  };

  nuevoHorario: Horario = {
    idHorario: 0,
    idCurso: this.curso?.idCurso ?? 0, // Si curso no está definido, asigna 0
    diaSemana: '',
    horaInicio: '',
    horaFin: '',
    estado: 'Activo',
    curso: this.curso ?? {} as Curso // Evita error asignando un objeto vacío si es undefined
  };

  materias: Materia[] = []; // Para la lista de materias
  docentes: Docente[] = []; // Para la lista de docentes
  horarios: Horario[] = [];  // Lista de horarios para mostrar

  displayedColumns: string[] = ['dia', 'inicio', 'fin', 'estado', 'acciones'];
  dataSource = new MatTableDataSource(this.curso.horario);


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cursoId = localStorage.getItem('idCurso');
      if (cursoId) {
        this.http.get<Curso>(`http://localhost:3000/curso/${cursoId}`).subscribe({
          next: (cursoData) => {
            this.curso = cursoData;
            console.log('Datos del curso', cursoData);
          },
          error: (err) => {
            console.error('Error al obtener los datos del curso', err);
          }
        });
      }
    }
    this.metodoGetmateria();
    this.metodoGetdocente();
  }

  // Para la lista de materias
  public metodoGetmateria() {
    this.http.get<Materia[]>('http://localhost:3000/materia/').subscribe({
      next: (materias) => {
        this.materias = materias;
      },
      error: (err) => {
        console.error('Error al obtener materias', err);
      }
    });
  }

  // Para la lista de docentes
  public metodoGetdocente() {
    this.http.get<Docente[]>('http://localhost:3000/usuario/docentes').subscribe({
      next: (docentes) => {
                this.docentes = docentes;
      },
      error: (err) => {
        console.error('Error al obtener docentes', err);
      }
    });
  }
  
  agregarHorario(): void {
    this.showHorarioForm = !this.showHorarioForm;
  }

  guardarNuevoHorario(): void {
    if (!this.curso) {
      console.error('Error: curso no definido');
      return;
    }
  
    if (this.nuevoHorario.diaSemana && this.nuevoHorario.horaInicio && this.nuevoHorario.horaFin) {
      const nuevoHorarioTemp: Horario = {
        ...this.nuevoHorario,
        idHorario: 0, // Se generará en el backend
        idCurso: this.curso.idCurso,
        curso: this.curso
      };
  
      this.curso.horario = this.curso.horario ?? []; // Asegurar que la lista existe
      this.curso.horario.push(nuevoHorarioTemp);
  
      this.showHorarioForm = false;
  
      // Reiniciar el formulario
      this.nuevoHorario = {
        idHorario: 0,
        idCurso: this.curso.idCurso,
        diaSemana: '',
        horaInicio: '',
        horaFin: '',
        estado: 'Activo',
        curso: this.curso
      };
    } else {
      alert('Por favor, complete todos los campos del horario');
    }
  }
  editarCurso(): void {
    const cursoId = this.curso.idCurso;
    if (cursoId) {
      this.http.put(`http://localhost:3000/curso/${cursoId}`, this.curso).subscribe({
        next: () => {
          console.log('Curso actualizado con éxito');
          alert('Curso actualizado con éxito');
        },
        error: (err) => {
          console.error('Error al actualizar el curso', err);
          alert('Error al actualizar el curso');
        }
      });
    }
  }
}
