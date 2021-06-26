import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoEntryComponent } from './demo-entry/demo-entry.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { TemplateFormComponent } from './template-form/template-form.component';


@NgModule({
  declarations: [DemoEntryComponent, DemoIconComponent, TemplateFormComponent],
  imports: [
    CommonModule,
    SharedModule,

    // feature modules
    DemoRoutingModule
  ]
})
export class DemoModule { }
