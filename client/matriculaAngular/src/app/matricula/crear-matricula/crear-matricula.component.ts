import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Perfil } from '../../../model/Perfil';
import { HttpClient } from '@angular/common/http';
import { OfertaAcademica } from '../../../model/OfertaAcademica';
import { FormsModule } from '@angular/forms';
import { PlanEstudios } from '../../../model/PlanEstudios';
import { Materia } from '../../../model/Materias';
import { Curso } from '../../../model/Curso';
import { HistorialAcademico } from '../../../model/HistorialAcademico';
import { response } from 'express';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-crear-matricula',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-matricula.component.html',
  styleUrl: './crear-matricula.component.css',
})
export class CrearMatriculaComponent implements OnInit {
  ofertaSelect: number = 0;
  planSelect: number = 0;
  materiaSelect: number = 0;
  estudianteId: number = 0;

  ofertas: OfertaAcademica[] = [];
  plan: PlanEstudios[] = [];
  materiasPorPlan: Materia[] = [];
  cursosPorMateria: Curso[] = [];
  fechaHoy: string;
  correo: string | null = null;
  estudiante!: Perfil;

  cursosSeleccionados: Curso[] = [];

  matriculaExitosa: boolean = false;

  public Historial = signal<HistorialAcademico[]>([]);

  constructor(private http: HttpClient) {
    const hoy = new Date();
    this.fechaHoy = hoy.toLocaleDateString('es-CR');

    this.correo = localStorage.getItem('correo');

    if (this.correo) {
      this.estudiantePorCorreo(this.correo);
    }
  }

  ngOnInit(): void {
    this.getPeriodo();
    this.getPlanEstudios();
  }

  estudiantePorCorreo(correo: string): void {
    this.http
      .get<Perfil>(`http://localhost:3000/usuario/correo/${correo}`)
      .subscribe({
        next: (data) => {
          this.estudiante = data;
          console.log('Datos del estudiante:', data);

          if (data.idUsuario !== undefined) {
            this.estudianteId = data.idUsuario;
            this.obtenerEstudiante(this.estudianteId);
          } else {
            console.error('El idUsuario es undefined');
          }
        },
        error: (err) => {
          console.error('Error al obtener el estudiante por correo', err);
        },
      });
  }

  obtenerEstudiante(idPerfil: number): void {
    this.http
      .get<{ idEstudiante: number; idPerfil: number; perfil: any }>(
        `http://localhost:3000/usuario/estudiante/${idPerfil}`
      )
      .subscribe({
        next: (data) => {
          console.log('ID del estudiante:', data.idEstudiante);
          this.estudianteId = data.idEstudiante;
        },
        error: (err) => {
          console.error('Error al obtener ID del estudiante por perfil', err);
        },
      });
  }

  //get Periodo
  getPeriodo(): void {
    this.http
      .get<OfertaAcademica[]>(`http://localhost:3000/ofertaAcademica/`)
      .subscribe({
        next: (oferta) => {
          this.ofertas = oferta;
          console.log('Datos del periodo:', oferta);
        },
        error: (err) => {
          console.error('Error al obtener el periodo', err);
        },
      });
  }

  //Lista de plan de estudios
  getPlanEstudios(): void {
    this.http.get<PlanEstudios[]>(`http://localhost:3000/plan/`).subscribe({
      next: (plan) => {
        this.plan = plan;
        console.log('Datos del plan de estudios:', plan);
      },
      error: (err) => {
        console.error('Error al obtener el plan de estudios', err);
      },
    });
  }

  //Filtrar materias por plan de estudios
  obtenerMateriasPorPlan(idPlan: number): void {
    this.http
      .get<Materia[]>(`http://localhost:3000/materia/plan/${idPlan}`)
      .subscribe({
        next: (data) => {
          this.materiasPorPlan = data;
          console.log('Materias disponibles', data);
        },
        error: (err) => {
          console.error('Error al obtener materias del plan', err);
        },
      });
  }

  //Obtener los cursos disponibles por materia
  obtenerCursosPorMateria(idMateria: number): void {
    this.http
      .get<Curso[]>(`http://localhost:3000/curso/materia/${idMateria}`)
      .subscribe({
        next: (data) => {
          this.cursosPorMateria = data;
          console.log('Curso disponible', data);
        },
        error: (err) => {
          console.error('Error al obtener cursos de las materias', err);
        },
      });
  }

  toggleCursoSeleccionado(curso: Curso): void {
    const index = this.cursosSeleccionados.findIndex(
      (c) => c.idCurso === curso.idCurso
    );

    if (index === -1) {
      this.cursosSeleccionados.push(curso);
    } else {
      this.cursosSeleccionados.splice(index, 1);
    }

    localStorage.setItem(
      'cursosSeleccionados',
      JSON.stringify(this.cursosSeleccionados)
    );
  }

  esCursoSeleccionado(curso: Curso): boolean {
    return this.cursosSeleccionados.some((c) => c.idCurso === curso.idCurso);
  }

  tieneCursoSeleccionado(materiaId: number): boolean {
    return this.cursosSeleccionados.some(
      (curso) => curso.materia?.idMateria === materiaId
    );
  }

  // Método en el componente frontend para formalizar la matrícula
  public formalizarMatricula(event: Event): void {
    const idEstudiante = this.estudianteId;

    if (!idEstudiante || this.cursosSeleccionados.length === 0) {
      alert(
        'Debes seleccionar al menos un curso para formalizar la matrícula.'
      );
      return;
    }

    const fechaActual = new Date();
    const encabezado = {
      idEstudiante: idEstudiante,
      fechaMatricula: fechaActual,
    };

    // Crear el encabezado de matrícula
    this.http
      .post<any>('http://localhost:3000/matricula/', encabezado)
      .subscribe({
        next: (respuestaEncabezado) => {
          const idEncabezado = respuestaEncabezado.idEncabezado;

          console.log('Encabezado creado:', respuestaEncabezado, idEncabezado);

          for (const curso of this.cursosSeleccionados) {
            const notaFinal = 0;

            const detalle = {
              idEncabezado: idEncabezado,
              idCurso: curso.idCurso,
            };

            // Crear detalle de matrícula
            this.http
              .post<any>('http://localhost:3000/matricula/detalle/', detalle)
              .subscribe({
                next: (respuestaDetalle) => {
                  console.log('Detalle de matrícula creado:', respuestaDetalle);

                  // Crear historial académico
                  const cuerpoHistorial = {
                    idEstudiante: idEstudiante,
                    idCurso: curso.idCurso,
                    notaFinal: notaFinal,
                  };

                  this.http
                    .post<any>(
                      'http://localhost:3000/historial',
                      cuerpoHistorial
                    )
                    .subscribe({
                      next: (respuestaHistorial) => {
                        const nuevoHistorial = respuestaHistorial.historial;

                        this.Historial.update((historiales) => [
                          ...historiales,
                          nuevoHistorial,
                        ]);
                        console.log('Historial creado:', nuevoHistorial);
                      },
                      error: (err) => {
                        console.error(
                          `Error al crear historial para el curso ${curso.idCurso}`,
                          err
                        );
                      },
                    });
                },
                error: (err) => {
                  console.error(
                    `Error al crear detalle de matrícula para el curso ${curso.idCurso}`,
                    err
                  );
                },
              });
          }

          this.matriculaExitosa = true;
          this.generarPDF();
          
        },
        error: (err) => {
          console.error('Error al crear el encabezado de matrícula', err);
          alert('Ocurrió un error al formalizar la matrícula.');
        },
      });
  }

  redirigirInicio(): void {
    window.location.href = '/inicio'; 
  }

  // Método para generar el PDF
  generarPDF(): void {
    const doc = new jsPDF();
    const fechaActual = new Date().toLocaleDateString('es-CR');
    const nombreEstudiante = this.estudiante?.nombre || 'Estudiante';

    doc.setFontSize(16);
    doc.text('Matrícula Exitosa', 20, 20);
    doc.setFontSize(12);
    doc.text(`Fecha: ${fechaActual}`, 20, 30);
    doc.text(`Nombre del Estudiante: ${nombreEstudiante}`, 20, 40);

    // Detalles de la matrícula
    let y = 60;
    this.cursosSeleccionados.forEach((curso) => {
      doc.text(`Curso: ${curso.materia?.descripcion}`, 20, y);
      y += 10;
    });

    // Guardar el PDF
    doc.save('Matricula estudiante: ' + nombreEstudiante+'.pdf');
  }

}


