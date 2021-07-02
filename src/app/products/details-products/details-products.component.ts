import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService, private router: Router) { }
  id: any = 0;
  productDescription: any = null;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductDescription(this.id);
  }

  getProductDescription(id: number){
    this.productDescription = this.service.getProductDetails(id);
  }

}

