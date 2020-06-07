import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.AHomeModule),
    },
    {
        path: 'pokemon',
        loadChildren: () => import('./modules/pokemon/pokemon.module').then((m) => m.APokemonModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
