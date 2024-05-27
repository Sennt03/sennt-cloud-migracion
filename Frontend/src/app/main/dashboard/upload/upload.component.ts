import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { HttpProgressEvent } from '@angular/common/http';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CloudService } from '@services/cloud.service';
import { MatExpansionPanel } from '@angular/material/expansion';
import { LsUploadFiles } from '@models/cloud.models';
import toastr from '@shared/utils/toastr';
import { Sort } from '@angular/material/sort';
import { Subscription, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalFolderComponent } from './modal-folder/modal-folder.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy{

  @ViewChild('expansionPanel', { static: true }) expansionPanel: MatExpansionPanel;
  @Output() $newActionUploaded = new EventEmitter<boolean>()
  @Input() path: string;
  @Input() maskLoad: any;
  $newFolder: Subscription

  panelOpenState: boolean = false;
  progressUpload: LsUploadFiles = {
    text: 'Uploading...',
    value: 0,
    loading: true,
    uploaded: []
  }

  constructor(
    private _bottomSheet: MatBottomSheet,
    private cloudService: CloudService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.$newFolder = this.cloudService.$newFolder.subscribe(() => this.newFolderModal())
  }

  ngOnDestroy(): void {
    this.$newFolder.unsubscribe()
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  newFolderModal(){
    const dialogRef = this.dialog.open(ModalFolderComponent, {
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.trim() != ''){
        this.createFolder(result)
      }
    })
  }

  createFolder(name){
    this.cloudService.createFolder(name.trim(), this.path).subscribe({
      next: (res) => {
        toastr.success(res.message, 'Successful')
        this.$newActionUploaded.emit(true)
      },
      error: (err) => {
        toastr.error(err.error.message, 'Error')
        this.maskLoad.next(false)
      }
    });
  }

  uploadFile($event){
    const files = $event.target.files
    this.progressUpload.loading = true
    this.progressUpload.value = 0
    this.progressUpload.text = 'Uploading...'
    this.progressUpload.uploaded = []
    this.expansionPanel.close();

    document.getElementById('accordion-uploading').classList.add('show')
    this.cloudService.uploadFile(files, this.path).subscribe({
      next: (res) => {
        if(!res?.event){
          this.progressUpload.value = res.progress
        }else{
          this.progressUpload.uploaded = res.event.responses
          this.progressUpload.text = 'Finished'
          this.expansionPanel.open();
          this.progressUpload.loading = false
          this.$newActionUploaded.emit(true)
        }
      },
      error: (err) => {
        toastr.error(err.error.message, 'Error uploading files')
      },
      complete: () => {
        const input:any = document.getElementById('file')
        input.value = ''
      }
    })


  }

  closeAccordion(){
    document.getElementById('accordion-uploading').classList.remove('show')
  }

}