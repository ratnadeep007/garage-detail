import { Routes } from '@angular/router';
import { TableComponent } from './app/table/table.component';
import { FormComponent } from './app/form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: FormComponent
    },
    {
        path: 'details',
        component: TableComponent
    }
];

