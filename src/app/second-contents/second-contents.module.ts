import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondContentsRoutingModule } from './second-contents-routing.module';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { SecondContentsComponent } from './second-contents.component';


@NgModule({
  declarations: [ThirdComponentComponent, SecondContentsComponent],
  imports: [
    CommonModule,
    SecondContentsRoutingModule
  ]
})
export class SecondContentsModule { }
