import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../model/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public listTitle: string = "Todos os produtos";
  public products: Array<IProduct>;
  public cart: Array<IProduct> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.setProducts()
  }

  setProducts() {
    this.productService.getProducts().subscribe(response=> {
      this.products = response;
    })
  }

  addItem(item) {
    console.log('Add item from output...');
    this.cart.push(item);
  }

}
