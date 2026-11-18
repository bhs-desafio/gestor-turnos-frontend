export class CargarTurnosDetalleResponse
{
    fila: number = 0;
    email: string | null = null;
    horaInicio: string | null = null;
    horaFin: string | null = null;
    exitoso: boolean = false;
    error: string | null = null;
    idTurno: string | null = null;
}

export class CargarTurnosResponse
{
    idCarga: string = "";
    totalFilas: number = 0;
    filasExitosas: number = 0;
    filasFallidas: number = 0;
    detalles: CargarTurnosDetalleResponse[] = [];
}
