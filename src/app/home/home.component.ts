import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonsResponse} from '../server-responses/pokemons.response';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons: PokemonsResponse;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(30)
      .subscribe(response => this.pokemons = response,
        (error: HttpErrorResponse) => alert(error.message));
  }

}
