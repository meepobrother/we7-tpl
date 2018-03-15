import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
const routes: Routes = [{
  path: '',
  component: RootComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    },
    {
      path: 'index',
      component: IndexComponent
    }, {
      path: 'post',
      component: PostComponent
    }, {
      path: 'order',
      component: OrderComponent
    }, {
      path: 'home',
      component: HomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
