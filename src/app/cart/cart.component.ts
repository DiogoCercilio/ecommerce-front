import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public totalItems: number = 0;

  constructor() {}

  addToCart() {
    this.totalItems++;
  }

}
