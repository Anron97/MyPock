import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from "./components/header-component/header.component";
import {MenuComponent} from "./components/menu-component/menu.component";
import {MatIconModule} from "@angular/material";
import {MyListComponent} from "./components/my-list-component/mylist.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MaterialService} from "./services/material.service";
import {MaterialComponent} from "./components/material-component/material.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
      HeaderComponent,
      MenuComponent,
      MyListComponent,
      MaterialComponent
  ],
  providers: [
      MaterialService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
