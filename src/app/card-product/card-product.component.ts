import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  @Input()
  public product: any

  @Output()
  onAddItem = new EventEmitter(); 

  constructor() {}

  addToCart(item) {
    this.onAddItem.emit(item);
  }

}
