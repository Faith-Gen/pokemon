import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, shareReplay} from 'rxjs/operators';
import {PokemonsResponse} from './server-responses/pokemons.response';
import {Pokemon} from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /**
   * The API base path.
   */
  public static POKEMON_API_BASE = 'https://pokeapi.co/api/v2/';

  /**
   * API base path with the pokemon suffix.
   */
  public static API_URL = PokemonService.POKEMON_API_BASE + 'pokemon';

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches pokemons from the server.
   * If url is not specified it uses the default url. This is done for pagination reasons.
   *
   * @param limit
   * @param url
   */
  getPokemons(limit: number, url?: string): Observable<PokemonsResponse> {
    let params: HttpParams = new HttpParams();

    if (!url) {
      params = params.set('limit', limit.toString())
        .set('offset', '0');
    }

    return this.http.get<PokemonsResponse>(url ?? PokemonService.API_URL, {params})
      .pipe(catchError(err => throwError(err)),
        shareReplay());
  }

  /**
   * Get single pokemon details.
   *
   * @param id
   */
  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(PokemonService.API_URL + `/${id}`)
      .pipe(catchError(err => throwError(err)));
  }
}
