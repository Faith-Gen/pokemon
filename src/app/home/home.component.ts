import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonsResponse} from '../server-responses/pokemons.response';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons$: Observable<PokemonsResponse>;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemons(30)
      .pipe(catchError(err => throwError(err)));
  }

  fetchPokemons(url: string){
    this.pokemons$ = this.pokemonService.getPokemons(30, url)
      .pipe(catchError(err => throwError(err)));
  }
}
