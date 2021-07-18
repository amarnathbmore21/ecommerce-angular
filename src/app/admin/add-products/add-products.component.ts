import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  constructor(private fb: FormBuilder, private service:ProductsService, private router: Router) { }

  productsForm!:  FormGroup ;

  ngOnInit(): void {

    this.productsForm = this.fb.group({
      name: [null, [Validators.required]],
      quantity: [0, [Validators.required]],
      description: [null],
      image: [null, [Validators.required]],
      stars: [0]
    })
  }

  submitForm(){
    if(this.productsForm.valid){
      this.service.addProduct(this.productsForm.value);
      this.router.navigate(['/admin'])
    }
    else{
      alert("Form is invalid!");
    }
  }

}
