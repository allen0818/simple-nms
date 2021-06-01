import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
