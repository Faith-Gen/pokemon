import {Pokemon} from '../models/pokemon';

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon;
}
