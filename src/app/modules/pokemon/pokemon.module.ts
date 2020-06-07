import { NgModule } from '@angular/core';
import { APokemonRoutingModule } from './pokemon-routing.module';
import { ASharedModule } from '../shared/shared.module';
import { APokemonHomeComponent } from './components/home.component';
import { APokemonComponent } from './components/pokemon.component';

@NgModule({
    declarations: [APokemonHomeComponent, APokemonComponent],
    imports: [ASharedModule, APokemonRoutingModule],
})
export class APokemonModule {}
