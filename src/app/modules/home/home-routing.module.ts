import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AHomeComponent } from './components/home.component';
import { Log } from '../core/decorators/app-decorators';

const routes: Routes = [
    {
        path: '',
        component: AHomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
@Log()
export class AHomeRoutingModule {}
