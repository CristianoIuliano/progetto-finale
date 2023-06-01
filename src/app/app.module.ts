import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sezioni/home/home.component';
import { CercaComponent } from './sezioni/cerca/cerca.component';
import { FilmDetailComponent } from './sezioni/film-detail/film-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { FilmApiService } from './services/film-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './autenticazione/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CercaComponent,
    FilmDetailComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FilmApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
