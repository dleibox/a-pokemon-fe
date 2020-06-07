import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-app-bottomsheet',
    templateUrl: './app-bottomsheet.component.html',
})
export class AppBottomsheetComponent implements OnInit {
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<AppBottomsheetComponent>) {}

    ngOnInit() {}

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
