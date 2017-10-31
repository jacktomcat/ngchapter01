import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { PolicyListComponent } from './policy/policy-list.component';
import { PolicyViewComponent } from './policy/policy-view.component';
import {PolicyService} from "./policy/policy.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRouting} from "./app-routing";


@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
    /*RouterModule.forRoot([
        {
          path:'policyList',
          component:PolicyListComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {//当path没有uri的时候,这里自动redirect一下
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
            path: 'detail/:id',
            component: PolicyViewComponent
        },
    ])*/
  ],
  providers:[PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
