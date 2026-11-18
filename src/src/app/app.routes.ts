import { Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout-component/layout-component';
import { CargarTurnos } from './components/importaciones/cargar-turnos/cargar-turnos';

export const routes: Routes = [
    {        
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'importar-turnos', component: CargarTurnos
            }
        ]
    }
];