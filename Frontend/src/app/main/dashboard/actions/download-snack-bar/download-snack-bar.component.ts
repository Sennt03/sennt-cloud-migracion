import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-download-snack-bar',
  templateUrl: './download-snack-bar.component.html',
  styleUrls: ['./download-snack-bar.component.scss']
})
export class DownloadSnackBarComponent {
  @Input() progressDownload!: number;
  @Input() downloadingText: string = 'Downloading...';

  constructor(private snackBarRef: MatSnackBarRef<DownloadSnackBarComponent>) {}

  closeSnackBar() {
    this.snackBarRef.dismiss();
  }
}
