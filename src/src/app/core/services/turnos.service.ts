import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { CargarTurnosModel } from "../models/cargar.turnos.model";
import { CargarTurnosResponse } from "../models/carga.turnos.response.model";

@Injectable()
export class TurnosService
{
    constructor(private apiService: ApiService ){}


     Importar(model:CargarTurnosModel): Observable<CargarTurnosResponse>
    {

        const formData = new FormData();
        formData.append('archivo', model.archivo, model.nombreArchivo);

        return this.apiService.post('turnos/carga', formData);

    }

}