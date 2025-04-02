import { Component, signal } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Perfil } from '../../../model/Perfil';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Materia } from '../../../model/Materias';


@Component({
  selector: 'app-materias-list',
  standalone: true,
  imports: [MatListModule, MatCommonModule, MatTableModule, MatIconModule, HttpClientModule], // Agrega el módulo de HttpClient para las rutas
  templateUrl: './materias-list.component.html',
  styleUrl: './materias-list.component.css'
})
export class MateriasListComponent {

  displayedColumns: string[] = ['idMateria', 'descripcion', 'estado', 'accion'];


  materias = signal<Materia[]>([]);
  dataSource = new MatTableDataSource<Materia>([]); 

  constructor(private http: HttpClient,private router: Router) {
    this.metodoGetMateria();
    
  }

  public metodoGetMateria() {
    this.http.get<Materia[]>('http://localhost:3000/materia/').subscribe((materias) => {
      this.materias.set(materias); 
      this.dataSource.data = materias; 
    });
  }

  public agregarMateriaALaSenial(materia: Materia) {
    // Creando el nuevo objeto de materia
    let nuevaMateria = {
      idMateria: materia.idMateria,
      idPlan: materia.idPlan,
      descripcion: materia.descripcion,
      estado: materia.estado
    };

      // Agregar la nueva materia a la lista
     this.materias.update(materias => [...materias, nuevaMateria]);
     this.dataSource.data = this.materias();
   }

       //Ruta para editar la materia
       editarMateria(idMateria: number): void {
        // Obtener la materia correspondiente
        const materiaSeleccionada = this.materias().find(m => m.idMateria === idMateria);
        
        if (!materiaSeleccionada) {
          return;
        }
      
        // Guardar la materia en el localStorage
        localStorage.setItem('idMateria', idMateria.toString());
        // Redirigir al componente de edición
        this.router.navigate(['/materias/edit', idMateria]); //Asegúrate de que la ruta sea correcta e igual a la que tienes en app.routes.ts
      

      }
 }
 


