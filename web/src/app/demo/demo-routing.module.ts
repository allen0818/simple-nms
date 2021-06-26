import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoEntryComponent } from './demo-entry/demo-entry.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: DemoEntryComponent },

  { path: 'template-form', component: TemplateFormComponent },
  { path: 'icon', component: DemoIconComponent },
  
  { path: '**', redirectTo: 'entry' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
