import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';
import { DataService } from '../../core/service/data.service';
import { PokemonAbilityDetail, Pokemon } from 'src/app/models/pokemon.model';
import { Log } from '../../core/decorators/app-decorators';

@Component({
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
})
@Log()
export class APokemonComponent implements OnInit, OnDestroy {
    pokemon$: Observable<Pokemon>;
    abilities$: Observable<PokemonAbilityDetail[]>;

    sub: Subscription;

    constructor(private svc: DataService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.pokemon$ = this.svc.getPokemon(params['idorname']).pipe(
                tap((data: Pokemon) => {
                    this.abilities$ = this.svc.getAbilities(data.abilities.map((a) => a.ability.name)).pipe(
                        map((abilities: PokemonAbilityDetail[]) => {
                            return abilities.map((a) => {
                                a.names = a.names.filter((n) => n.language.name === 'en');
                                a.effect_entries = a.effect_entries.filter((e) => e.language.name === 'en');
                                a.flavor_text_entries = a.flavor_text_entries.filter((f) => f.language.name === 'en');
                                return a;
                            });
                        }),
                        share()
                    );
                })
            );
        });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
