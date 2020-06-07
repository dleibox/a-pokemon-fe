import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APokemonHomeComponent } from './components/home.component';
import { APokemonComponent } from './components/pokemon.component';

const routes: Routes = [
    {
        path: '',
        component: APokemonHomeComponent,
    },
    {
        path: ':idorname',
        component: APokemonComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class APokemonRoutingModule {}
