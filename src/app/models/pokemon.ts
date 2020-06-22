import {Ability} from './pokemon/ability';
import {Data} from './pokemon/data';
import {Type} from './pokemon/type';

export interface Pokemon extends Data {
  base_experience: number;
  abilities: Ability[];
  forms: Data[];
  types: Type[];
  weight: number;
  height: number;
}
