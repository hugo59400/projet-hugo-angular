import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { SallePageComponent } from './salle-page/salle-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
const routes: Routes = [
  { path: "", redirectTo: "films", pathMatch: "full" },
  { path: "films", component: FilmPageComponent },
  { path: "clients", component: ClientPageComponent },
  { path: "salles", component: SallePageComponent },
  {
    // préfixe de la route
    path: "films",
    // toutes les routes enfants de la route films
    children: [
    
      { path: ":id", component: FilmPageComponent, pathMatch: "prefix" },
   
    ]
  },
  {
    // préfixe de la route
    path: "clients",
    // toutes les routes enfants de la route clients
    children: [
    
      { path: ":id", component: ClientPageComponent, pathMatch: "prefix" }
      // { path: "new", component: UserCreateComponent, pathMatch: "full" }
   
    ]
  },
  {
    // préfixe de la route
    path: "salles",
    // toutes les routes enfants de la route salles
    children: [
    
      { path: ":id", component: SallePageComponent, pathMatch: "prefix" }
      // { path: "new", component: ClientCreateComponent, pathMatch: "full" }
   
    ]
  },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
