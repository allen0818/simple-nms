import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DeviceRoutingModule } from './device-routing.module';

import { DeviceListComponent } from './pages/device-list/device-list.component';
import { AddDeviceDialogComponent } from './pages/add-device-dialog/add-device-dialog.component';

@NgModule({
  declarations: [DeviceListComponent, AddDeviceDialogComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule,
  ]
})
export class DeviceModule { }
