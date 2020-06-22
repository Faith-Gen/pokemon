import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

  viewPokemon(pokemon: Pokemon) {
    this.pokemonService.getPokemonId(pokemon.url);
  }
}
