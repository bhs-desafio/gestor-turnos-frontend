import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TurnosService } from '../../../core/services/turnos.service';
import { CargarTurnosModel } from '../../../core/models/cargar.turnos.model';
import { CargarTurnosResponse } from '../../../core/models/carga.turnos.response.model';

@Component({
  imports: [ReactiveFormsModule, DatePipe],
  selector: 'app-admin-productos',
  styleUrl: './cargar-turnos.css',
  templateUrl: './cargar-turnos.html',
})
export class CargarTurnos {

  frmImportar = new FormGroup(
    {
      archivoTurnos: new FormControl('', Validators.required)
    }

  );

  archivoSeleccionado: File | null = null;
  cargando = signal(false);
  resultado = signal<CargarTurnosResponse | null>(null);
  error = signal<string | null>(null);

  constructor(private turnosService: TurnosService) {
  }

  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.archivoSeleccionado = input.files && input.files.length > 0 ? input.files[0] : null;
  }

  onImportar(): void {
    if (!this.archivoSeleccionado) {
      this.error.set('Debe seleccionar un archivo.');
      return;
    }

    const model = new CargarTurnosModel();
    model.nombreArchivo = this.archivoSeleccionado.name;
    model.archivo = this.archivoSeleccionado;

    this.cargando.set(true);
    this.error.set(null);
    this.resultado.set(null);

    this.turnosService.Importar(model).subscribe({
      next: (respuesta) => {
        this.resultado.set(respuesta);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Ocurrió un error al importar el archivo.');
        this.cargando.set(false);
      }
    });
  }


}
