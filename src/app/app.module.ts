import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, UrlSerializer } from '@angular/router';
import { AppComponent } from './app.component';
import { MeepoUrlSerializer } from 'we7-router';
import { We7TplMobileModule } from './mobile/mobile.module';
import { RoutesModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
      path: 'web/site/entry/we7_tpl',
      loadChildren: 'app/routes/routes.module#RoutesModule'
    }, {
      path: 'app/entry/site/we7_tpl',
      loadChildren: 'app/routes/routes.module#RoutesModule'
    }]),
    We7TplMobileModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
