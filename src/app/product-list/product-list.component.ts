import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  onOptionsSelected(value:string){
     if (value == 'price') {
       this.products.sort((a, b) => a.price - b.price);
     } else if (value == 'rating') {
       this.products.sort((a, b) => b.rating - a.rating);
     } else {
       this.products.sort((a, b) => a.id - b.id);
     }
  }

}
