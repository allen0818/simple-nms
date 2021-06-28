import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AlertSnackBarComponent } from './components/alert-snack-bar/alert-snack-bar.component';
import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmDialogComponent, AlertSnackBarComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
