import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private router: Router){}

  goToProductPanel(): void {
    this.router.navigate(['']);
  }
  goToAdminPanel(): void {
    this.router.navigate(['/admin']);
  }

  goToAddProduct(): void {
    this.router.navigate(['/admin/add-products']);
  }
}
