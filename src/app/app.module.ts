import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { FilmCardComponent } from './film-page/film-card/film-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientCardComponent } from './client-page/client-card/client-card.component';
import { SallePageComponent } from './salle-page/salle-page.component';
import { SalleCardComponent } from './salle-page/salle-card/salle-card.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmPageComponent,
    FilmCardComponent,
    ClientPageComponent,
    ClientCardComponent,
    ClientPageComponent,
    SallePageComponent,
    SalleCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
