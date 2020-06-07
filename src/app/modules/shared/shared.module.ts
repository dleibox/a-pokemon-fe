import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { AppBottomsheetComponent } from './components/app-bottomsheet.component';
import { ToImagePipe } from './pipes/to-image.pipe';

@NgModule({
    declarations: [AppBottomsheetComponent, ToImagePipe],
    imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
    exports: [CommonModule, ReactiveFormsModule, AppMaterialModule, ToImagePipe],
})
export class ASharedModule {}
