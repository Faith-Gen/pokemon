import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
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
  PokemonDetailsComponent
];
