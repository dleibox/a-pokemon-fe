import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ASharedModule } from '../shared/shared.module';
import { AHomeRoutingModule } from './home-routing.module';
import * as fromPokemon from 'src/app/state-store/pokemon.reducer';
import { APokemonEffects } from 'src/app/state-store/pokemon.effects';
import { AHomeComponent } from './components/home.component';
import { Log } from '../core/decorators/app-decorators';

@NgModule({
    declarations: [AHomeComponent],
    imports: [ASharedModule, AHomeRoutingModule, StoreModule.forFeature('pokemon', fromPokemon.pokemonReducer), EffectsModule.forFeature([APokemonEffects])],
    exports: [],
})
@Log()
export class AHomeModule {}
