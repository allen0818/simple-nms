import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@app/shared/shared-material.module';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './components/device-list/device-list.component';


@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedMaterialModule
  ]
})
export class DeviceModule { }
