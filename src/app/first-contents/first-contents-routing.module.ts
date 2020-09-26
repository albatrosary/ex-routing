import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstContentsComponent } from './first-contents.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [{
  path: '',
  component: FirstContentsComponent,
  children: [
    { path: 'first-component', component: FirstComponentComponent },
    { path: 'second-component', component: SecondComponentComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstContentsRoutingModule { }
