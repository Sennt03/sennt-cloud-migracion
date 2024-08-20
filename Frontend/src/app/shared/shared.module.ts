import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '@material/material.module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    LoadingComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    MaterialModule,
    ModalComponent
  ]
})
export class SharedModule { }
