import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ActionsComponent } from './components/actions/actions.component';


@NgModule({
  declarations: [
    LoadingComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ActionsComponent
  ]
})
export class SharedModule { }
