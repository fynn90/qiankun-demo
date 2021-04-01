import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      // @ts-ignore
      useValue: window.__POWERED_BY_QIANKUN__ ? '/ng-app' : '/',
    },
  ],
})
export class AppRoutingModule {}
