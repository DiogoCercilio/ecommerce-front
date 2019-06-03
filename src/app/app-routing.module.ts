import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'produto/:type', component: ProductListComponent },
  { path: 'produto/:type/:category', component: ProductListComponent },
  { path: 'produto/detalhe/:id', component: ProductDetailsComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
