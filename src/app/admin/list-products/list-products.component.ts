import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService,private router: Router,) { }

  productList: any;
  searchText: string = "";
  filteredProductList = null;

  ngOnInit(): void {
    this.productList = this.service.getProductList();
    this.filteredProductList = this.productList;
  }

  filterProducts(): void {
    this.filteredProductList = this.productList.filter((element: { name: string; }) => element.name.includes(this.searchText));
  }

  clearSearch(): void {
    this.filteredProductList = this.productList;
    this.searchText = "";
  }

  deleteProduct(item: any){
    this.service.deleteProduct(item.id);
  }

  increaseQuantity(item: any): void {
    this.service.incrementProductQuantity(item.id)
  }

  decreaseQuantity(item: any): void {
    this.service.decreaseProductQuantity(item.id)
  }
}
