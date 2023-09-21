import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoResolver } from 'common/resolvers/page-resolvers/demo-resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../common/pages/demo/demo.module').then((m) => m.DemoModule),
    resolve: [DemoResolver],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
