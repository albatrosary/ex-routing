import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'first-contents',
    loadChildren: () => import('./first-contents/first-contents.module').then((m) => m.FirstContentsModule),

  }, {
    path: 'second-contents',
    loadChildren: () => import('./second-contents/second-contents.module').then((m) => m.SecondContentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
