import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: '', redirectTo: '/purchase', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
