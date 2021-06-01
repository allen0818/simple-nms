import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AlertSnackBarComponent } from './components/alert-snack-bar/alert-snack-bar.component';
import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ConfirmDialogComponent, AlertSnackBarComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SharedMaterialModule,
    FlexLayoutModule,

    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
