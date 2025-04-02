import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../../model/Perfil';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Materia } from '../../../model/Materias';
@Component({
  selector: 'app-materias-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './materias-edit.component.html',
  styleUrl: './materias-edit.component.css'
})
export class MateriasEditComponent implements OnInit{

  materia: Materia = {
    idMateria: 0,
    idPlan: 0,
    descripcion: '',
    estado: 'Activo'
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const materiaId = localStorage.getItem('idMateria'); 

    if (materiaId) {
      this.http.get<Materia>(`http://localhost:3000/materia/${materiaId}`).subscribe({
        next: (materiaData) => {
          this.materia = materiaData; 
          console.log('Datos de la materia', materiaData);

        },
        error: (err) => {
          console.error('Error al obtener los datos de la materia', err);
        }
      });
    }
  }

  public editarMateria(): void {
    const materiaId = this.materia.idMateria;
    if (materiaId) {
      this.http.put(`http://localhost:3000/materia/${materiaId}`, this.materia).subscribe({
        next: () => {
          console.log('Materia actualizada con éxito');
          alert('Materia actualizada con éxito');
        },
        error: (err) => {
          console.error('Error al actualizar la materia', err);
          alert('Error al actualizar la materia');
        },
      });
    }
  }
}
