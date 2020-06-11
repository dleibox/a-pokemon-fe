import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Log } from './modules/core/decorators/app-decorators';

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
@Log()
export class AppRoutingModule {}
