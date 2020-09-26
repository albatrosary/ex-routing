import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondContentsComponent } from './second-contents.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [{
  path: '',
  component: SecondContentsComponent,
  children: [
    { path: '', component: ThirdComponentComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondContentsRoutingModule { }
