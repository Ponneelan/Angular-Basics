import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './hooks/hooks.component';
import { MyAppComponent } from './my-app/my-app.component';

const routes: Routes = [
  {
    path:'one',
    component:HooksComponent
  },
  {
    path:'two',
    component:MyAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
