import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Provincia } from '../../model/Provincia';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-provincia',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './provincia.component.html',
  styleUrl: './provincia.component.css'
})
export class ProvinciaComponent {
  public Provincias = signal<Provincia[]>([]);




  constructor(private http: HttpClient) {
    this.metodoGETProvincias();
  };


  public metodoGETProvincias() {
    let cuerpo = {};
    this.http.get('http://localhost:3000/provincias', cuerpo).subscribe((Provincias) => {
      const arr = Provincias as Provincia[];
      arr.forEach((Provincia) => {
        this.agregarProvinviaALaSenial(Provincia.Provincia, Provincia.ProvinciaId);
      });
      // console.log(typeof(arr));
    });
  };


  public agregarProvinvia(event:  Event) {
    let tag = event.target as HTMLInputElement
    let cuerpo = {
      Provincia: tag.value,
    }
    this.http.post('http://localhost:3000/provincias', cuerpo).subscribe(() => {
      // const nuevaProvincia = Provincia as Provincia;
      this.Provincias.update((Provincias) => [...Provincias, cuerpo]);
    });
  };


  public agregarProvinviaALaSenial(Provincia: string, ProvinciaId?: string) {
    let nuevaProvincia = {
      ProvinciaId: ProvinciaId,
      Provincia: Provincia,

    };
    this.Provincias.update((Provincias) => [...Provincias, nuevaProvincia]);
  };


  public modificarProvinvia(Id: any, event:  Event) {
    let tag = event.target as HTMLInputElement
    let cuerpo = {
      Provincia: tag.value,
    }
    this.http.put('http://localhost:3000/provincias/' + Id, cuerpo).subscribe(() => {
      // const nuevaProvincia = Provincia as Provincia;
      this.Provincias.update((Provincias) => {
        return Provincias.map((Provincia) => {
          if (Provincia.ProvinciaId === Id) {
            return {...Provincia, Provincia: tag.value};
          }
          return Provincia;
        });
      });
    });
  };


  public borrarProvinvia(Id: any) {
    console.log(Id);
    this.http.delete('http://localhost:3000/provincias/' + Id).subscribe(() => {
      this.Provincias.update((Provincias) => Provincias.filter((Provincia) => Provincia.ProvinciaId !== Id));
    });
  };
}

