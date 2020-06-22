import {Ability} from './pokemon/ability';
import {Data} from './pokemon/data';

export interface Pokemon extends Data {
  base_experience: number;
  abilities: Ability[];
}
