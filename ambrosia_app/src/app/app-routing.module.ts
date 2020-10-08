import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { SearchDropdownComponent } from './shared/search-dropdown/search-dropdown/search-dropdown.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: 'search', component: SearchDropdownComponent },
  { path: '', redirectTo: '/purchase', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
