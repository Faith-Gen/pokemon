import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pokemonLink'})
export class PokemonLink implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const stringIds = value.split('/').filter(val => val.length !== 0 && !isNaN(val));
    // tslint:disable-next-line:radix
    return '/pokemon/' + parseInt(stringIds[0]);
  }
}
