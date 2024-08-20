import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSortModule } from '@angular/material/sort';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSortModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSortModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
