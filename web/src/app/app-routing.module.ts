import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'articles', pathMatch: 'full' },
      { path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
      { path: 'demos', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
      { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) }
    ]
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
