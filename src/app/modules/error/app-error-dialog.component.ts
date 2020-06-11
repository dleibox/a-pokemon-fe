import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Log } from '../core/decorators/app-decorators';

@Component({
    // selector: 'error-dialog',
    templateUrl: 'app-error-dialog.component.html',
})
@Log()
export class AppErrorDialogComponent {
    constructor(private dlgRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.dlgRef.afterClosed().subscribe((_) => {
            console.log('[   errDlg ] [ closed ]', _);
        });
    }
}
