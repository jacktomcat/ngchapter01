
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolicyListComponent }      from './policy/policy-list.component';
import { PolicyViewComponent }  from './policy/policy-view.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: PolicyViewComponent },
    { path: 'policyList',     component: PolicyListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouting {

}
