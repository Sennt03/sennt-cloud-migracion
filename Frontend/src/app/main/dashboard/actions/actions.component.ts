import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CloudService } from '@services/cloud.service';
import { saveAs } from 'file-saver';
import toastr from '@shared/utils/toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DownloadSnackBarComponent } from './download-snack-bar/download-snack-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { DashboardService } from '@services/dashboard.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  @Input() isFile: boolean = false
  @Input() path: string
  @Input() name: string
  @Input() maskLoad: any

  progressDownload = 0

  constructor(
    private cloudService: CloudService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private dashBoardService: DashboardService
  ){}

  download() {
    const snackBarRef = this._snackBar.openFromComponent(DownloadSnackBarComponent, {
      duration: 0,  // No se cierra automáticamente
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['white-snack-bar'],
      data: { progressDownload: this.progressDownload, downloadingText: 'Downloading...' }
    });

    const pathDownload = this.path + '/' + this.name;
    
    this.cloudService.downloadFile(pathDownload).subscribe({
      next: (state) => {
        // Actualiza el progreso
        this.progressDownload = state.progress;
        
        // Accede al componente SnackBar y actualiza sus valores
        const snackBarInstance = snackBarRef.instance;
        snackBarInstance.progressDownload = this.progressDownload;
        
        if (state.file) {
          const blob = new Blob([state.file]);
          saveAs(blob, this.name);
          // Accede al componente SnackBar y actualiza sus valores
          snackBarInstance.downloadingText = 'Downloaded';
          setTimeout(() => {
            snackBarRef.dismiss();
          }, 3000);
        }
      },
      error: (err) => {
        alert('Error downloading file, please report.');
      },
      complete: () => {
        this.progressDownload = 0;
      }
    });
  }

  deleteFile(){
    const pathDelete = this.path + '/' + this.name;

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        title: 'Delete',
        message: `Confirm deleting "${this.name}"`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.confirmed) {
        toastr.setOption('timeOut', '0')
        toastr.info(`Deleting...`, '')
        this.maskLoad.next(true)
        this.cloudService.deleteFile(pathDelete).subscribe({
          next: (res) => {
            this.maskLoad.next(false)
            toastr.setDefaultsOptions()
            toastr.clear()
            toastr.success(res.message, '')
            this.dashBoardService.reloadDashboard(true)
          },
          error: () => {
            this.maskLoad.next(false)
            toastr.clear()
            toastr.error('Error unexpected', '')
          },
        })
      }
    });

  }

}
