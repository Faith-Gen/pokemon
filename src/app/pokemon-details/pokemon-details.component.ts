import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: Pokemon;
  private pokemonId: number;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.pokemonId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(this.pokemonId)
      .subscribe(response => this.pokemon = response);
  }
}
