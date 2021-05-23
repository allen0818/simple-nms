import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedMaterialModule } from '../shared/shared-material.module';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedMaterialModule
  ]
})
export class HomeModule { }
