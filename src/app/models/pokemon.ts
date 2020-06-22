import {Ability} from './pokemon/ability';
import {Data} from './pokemon/data';
import {Type} from './pokemon/type';
import {Sprites} from './pokemon/sprites';
import {Move} from './pokemon/move';

export interface Pokemon extends Data {
  base_experience: number;
  abilities: Ability[];
  forms: Data[];
  types: Type[];
  weight: number;
  height: number;
  sprites: Sprites;
  moves: Move[];
}
