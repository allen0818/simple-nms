import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';


@NgModule({
  declarations: [PostListComponent, PostDialogComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
  ]
})
export class PostModule { }
