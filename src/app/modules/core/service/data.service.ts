import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    public getPokemons(offset = 0, limit = 12) {
        return this.http.get(`${environment.pokeApi}/pokemon?offset=${offset}&limit=${limit}`);
    }

    public getPokemon(id) {
        return this.http.get(`${environment.pokeApi}/pokemon/${id}`);
    }

    public getAbilities(names: string[]) {
        return forkJoin(
            names.map((name) => {
                return this.http.get(`${environment.pokeApi}/ability/${name}`);
            })
        );
    }
}
