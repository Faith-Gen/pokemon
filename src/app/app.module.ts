import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routeComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PokemonComponent} from './pokemon/pokemon.component';
import {PokemonLink} from './pipes/pokemon.link';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    PokemonComponent,
    PokemonLink,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
