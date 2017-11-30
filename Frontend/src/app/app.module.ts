import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from "./components/header-component/header.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
      HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
