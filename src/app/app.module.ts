import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import {SecondComponent} from './second-component/second.component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { ForthComponentComponent } from './forth-component/forth-component.component';



@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponentComponent,
    ForthComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
