import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';
import { HomeModule } from './home/home.module';
import { PostModule } from './post/post.module';
import { DeviceModule } from './device/device.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,

    // feature modules
    HomeModule,
    PostModule,
    DeviceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
