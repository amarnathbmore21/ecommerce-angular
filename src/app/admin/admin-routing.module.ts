import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from '../admin/list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {
    path: '',
    component:ListProductsComponent
  },
  {
    path: 'add-products',
    component:AddProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
