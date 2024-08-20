import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { ActionsComponent } from './actions/actions.component';
import { UploadComponent } from './upload/upload.component';
import { BottomSheetComponent } from './upload/bottom-sheet/bottom-sheet.component';
import { FormsModule } from '@angular/forms';
import { ModalFolderComponent } from './upload/modal-folder/modal-folder.component';
import { DownloadSnackBarComponent } from './actions/download-snack-bar/download-snack-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ActionsComponent,
    UploadComponent,
    BottomSheetComponent,
    ModalFolderComponent,
    DownloadSnackBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DashboardModule { }
