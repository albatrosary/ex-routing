import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstContentsRoutingModule } from './first-contents-routing.module';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstContentsComponent } from './first-contents.component';


@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent, FirstContentsComponent],
  imports: [
    CommonModule,
    FirstContentsRoutingModule
  ]
})
export class FirstContentsModule { }
