import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environment";

@Injectable()
export class ApiService {
    rutaBase: string;
    constructor(private httpClient: HttpClient) {
        this.rutaBase = environment.apiUrlBase;
    }

    get(endpointUrl: string, httpParams: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient.get(`${this.rutaBase}/${endpointUrl}`, { params: httpParams })
                .pipe(catchError(this.formatErrors));;
    }

    post(endpointUrl: string, body: any = {}): Observable<any> {
        return this.httpClient.post(`${this.rutaBase}/${endpointUrl}`, body);
    }

    put(endpointUrl: string, body: any = {}): Observable<any> {
        return this.httpClient.put(`${this.rutaBase}/${endpointUrl}`, body);
    }

    delete(endpointUrl: string, httpParams: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient.delete(`${this.rutaBase}/${endpointUrl}`, { params: httpParams });
    }

    formatErrors(error:any)
    {
        console.log(error);
        return throwError(() => {
            const error: any = new Error(`Errr al obtener la información`);
            error.timestamp = Date.now();
            return error;
          });
    }

}