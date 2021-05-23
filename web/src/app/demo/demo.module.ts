import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@app/shared/shared-material.module';


import { DemoRoutingModule } from './demo-routing.module';
import { DemoEntryComponent } from './demo-entry/demo-entry.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';


@NgModule({
  declarations: [DemoEntryComponent, DemoIconComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,

    // feature modules
    DemoRoutingModule
  ]
})
export class DemoModule { }
