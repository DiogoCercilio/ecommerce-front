import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from './card-product/card-product.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskbarComponent,
    FooterComponent,
    MainComponent,
    CardProductComponent,
    CartComponent,
    CartDetailsComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
