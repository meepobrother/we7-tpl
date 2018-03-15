import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, UrlSerializer } from '@angular/router';
import { AppComponent } from './app.component';
import { MeepoUrlSerializer } from 'we7-router';

import { We7TplMobileModule } from './mobile/mobile.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '**',
      component: AppComponent
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
