import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    path: 'home',
    loadChildren : () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'student',
    loadChildren : () => import('./student/student.module').then(x => x.StudentModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
