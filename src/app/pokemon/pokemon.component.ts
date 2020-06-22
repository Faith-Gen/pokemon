import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  viewPokemon(pokemon: Pokemon) {
    const pokemonId = this.pokemonService.getPokemonId(pokemon.url);
    this.router.navigate(['pokemon', pokemonId]);
  }
}
