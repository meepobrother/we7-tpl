import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { We7TplMobileModule } from '../mobile/mobile.module';
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    We7TplMobileModule
  ],
  declarations: [IndexComponent, PostComponent, OrderComponent, HomeComponent, RootComponent]
})
export class RoutesModule { }
