import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    ResultDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
