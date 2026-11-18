import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TurnosService } from './core/services/turnos.service';
import { ApiService } from './core/services/api.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpAuthInterceptorFn } from './core/interceptors/http.interceptor';

let services = [
              ApiService,
              TurnosService
              ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpAuthInterceptorFn])),
    ...services
  ]
};
