import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@app/shared/shared-material.module';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { AddDeviceDialogComponent } from './components/add-device-dialog/add-device-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeviceListComponent, AddDeviceDialogComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeviceModule { }