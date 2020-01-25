import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { AmiComponent } from './ami/ami.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'form',
    pathMatch: 'full'
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'ami',
    component: AmiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
