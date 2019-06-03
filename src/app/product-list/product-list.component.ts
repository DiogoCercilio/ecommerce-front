import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../model/product.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public listTitle: string = this.activatedRoute.snapshot.params.type + " " + this.activatedRoute.snapshot.params.category;
  public products: Array<IProduct>;
  public cart: Array<IProduct> = [];
  public currentCategory: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setProducts();
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => this.setProducts());
  }  

  setProducts() {

    const category = this.activatedRoute.snapshot.params.category || "";
    const productType = this.activatedRoute.snapshot.params.type;
    this.listTitle = productType + " " + category;

    this.productService.getProducts().subscribe(response=> {
      if (category) {
        this.products = response.filter(product=> product.category === category && product.productType === productType);
      } else {
        this.products = response.filter(product=> product.productType === productType);
      }
    })
  }

  addItem() {
    console.log('adding...');
  }
}
