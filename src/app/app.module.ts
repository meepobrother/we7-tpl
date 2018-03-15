import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, UrlSerializer } from '@angular/router';
import { AppComponent } from './app.component';
import { MeepoUrlSerializer } from 'we7-router';
import { We7TplMobileModule } from './mobile/mobile.module';
import { RoutesModule } from './routes/routes.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'app/entry/site/we7_tpl/index'
    }, {
      path: 'web/site/entry/undefined/index',
      pathMatch: 'full',
      redirectTo: 'app/entry/site/we7_tpl/index'
    }, {
      path: 'app/entry/site/we7_tpl',
      loadChildren: 'app/routes/routes.module#RoutesModule'
    }]),
    We7TplMobileModule
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
