import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService,private router: Router,) { }

  productList = null;
  searchText: string = "";
  filteredProductsList = null;

  ngOnInit(): void {
    this.productList = this.service.getProductList();
    this.productList = this.filteredProductsList;
  }

  goToProductDetails(id:number): void{
    this.router.navigate(['/product/'+id]);
  }
  }
}
