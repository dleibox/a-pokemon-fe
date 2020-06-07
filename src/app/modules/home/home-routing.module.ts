import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AHomeComponent } from './components/home.component';

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
export class AHomeRoutingModule {}
