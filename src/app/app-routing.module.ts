import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ProductsModule
  },
  {
    path: 'admin',
    loadChildren: () =>  AdminModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
