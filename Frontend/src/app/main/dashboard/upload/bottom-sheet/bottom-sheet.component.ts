import { Component, EventEmitter, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CloudService } from '@services/cloud.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private cloudService: CloudService
  ) {}

  openLink(event: MouseEvent, method: 'folder' | 'file'): void {
    this[method]()
  }

  folder(){
    this.cloudService.$newFolder.emit(true)
    this._bottomSheetRef.dismiss();
  }

  file(){
    document.getElementById('file').click()
    this._bottomSheetRef.dismiss();
  }
}
