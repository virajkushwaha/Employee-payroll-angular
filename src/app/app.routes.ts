import { Routes } from '@angular/router';
import { EmployeePayrollComponent } from './components/employee-payroll/employee-payroll.component';
import { EmployeeAddFormsComponent } from './components/employee-add-forms/employee-add-forms.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

export const routes: Routes = [
    {
        path: '',
        component : EmployeePayrollComponent
    },
    {
        path:"add",
        component: EmployeeAddFormsComponent
    },
    {
        path:"update/:id",
        component: UpdateFormComponent
    }
];
