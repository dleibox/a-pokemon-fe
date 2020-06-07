import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [],
    imports: [
        OverlayModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatChipsModule,
        MatMenuModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatPaginatorModule,
    ],
    exports: [
        OverlayModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatChipsModule,
        MatMenuModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatPaginatorModule,
    ],
})
export class AppMaterialModule {}
