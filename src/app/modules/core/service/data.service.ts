import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    public getPokemons(offset = 0, limit = 12) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    }

    public getPokemon(id) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    public getAbilities(names: string[]) {
        return forkJoin(names.map((name) => this.http.get(`https://pokeapi.co/api/v2/ability/${name}`)));
    }
}
