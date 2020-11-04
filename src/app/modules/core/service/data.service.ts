import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Log } from '../decorators/app-decorators';

export interface ACONFIG {
    production: boolean;
    pokemonApiUrl: string;
}

export const appConfig: ACONFIG = {
    production: false,
    pokemonApiUrl: null
};

@Injectable({
    providedIn: 'root'
})
@Log()
export class DataService {
    constructor(private http: HttpClient) {}

    public getPokemons(offset = 0, limit = 12) {
        return this.http.get(`${appConfig.pokemonApiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    }

    public getPokemon(id) {
        return this.http.get(`${appConfig.pokemonApiUrl}/pokemon/${id}`);
    }

    public getAbilities(names: string[]) {
        return forkJoin(
            names.map((name) => {
                return this.http.get(`${appConfig.pokemonApiUrl}/ability/${name}`);
            })
        );
    }
}
