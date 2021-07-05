import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DeviceRoutingModule } from './device-routing.module';

import { DeviceListComponent } from './pages/device-list/device-list.component';
import { AddDeviceDialogComponent } from './pages/add-device-dialog/add-device-dialog.component';
import { DeviceDetailComponent } from './pages/device-detail/device-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeviceListComponent,
    AddDeviceDialogComponent,
    DeviceDetailComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class DeviceModule { }
