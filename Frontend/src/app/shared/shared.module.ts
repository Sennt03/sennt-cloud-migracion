import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '@material/material.module';
import { ModalActionsComponent } from './components/modal-actions/modal-actions.component';


@NgModule({
  declarations: [
    LoadingComponent,
    ModalActionsComponent,
    ModalActionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    MaterialModule,
    ModalActionsComponent
  ]
})
export class SharedModule { }
