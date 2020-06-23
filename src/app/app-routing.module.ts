import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routeComponents = [
  HomeComponent,
  PokemonDetailsComponent,
  PageNotFoundComponent
];
