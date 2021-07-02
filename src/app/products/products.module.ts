import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule } from '@angular/forms';
import { DetailsProductsComponent } from './details-products/details-products.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailsProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
