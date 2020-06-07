import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/service/data.service';
import { tap, map } from 'rxjs/operators';

@Component({
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
})
export class APokemonComponent implements OnInit, OnDestroy {
    pokemon$: Observable<any>;
    abilities$: Observable<any>;

    sub: Subscription;

    constructor(private svc: DataService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.pokemon$ = this.svc.getPokemon(params['idorname']).pipe(
                tap((data) => {
                    this.abilities$ = this.svc.getAbilities(data.abilities.map((a) => a.ability.name)).pipe(
                        map((abilities: any) => {
                            return abilities.map((a) => {
                                a.names = a.names.filter((n) => n.language.name === 'en');
                                a.effect_entries = a.effect_entries.filter((e) => e.language.name === 'en');
                                a.flavor_text_entries = a.flavor_text_entries.filter((f) => f.language.name === 'en');
                                return a;
                            });
                        })
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
