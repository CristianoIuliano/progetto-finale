import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sezioni/home/home.component';
import { CercaComponent } from './sezioni/cerca/cerca.component';
import { FilmDetailComponent } from './sezioni/film-detail/film-detail.component';
import { LoginComponent } from './autenticazione/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cerca', component: CercaComponent},
  {path: 'film/:id', component: FilmDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


