import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: '/inventory', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CodenamezurichRoutingModule { }
