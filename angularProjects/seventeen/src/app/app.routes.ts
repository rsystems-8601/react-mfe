import { Routes } from '@angular/router';
import { ClistComponent } from './clist/clist.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'clist', title: 'Customer List', component: ClistComponent},
    {path:'registration', title: 'Registration', component: RegistrationComponent}
];
