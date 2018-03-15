import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-weui/swiper';
import { RouterModule } from '@angular/router';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppUploaderComponent } from './app-uploader/app-uploader.component';
import { AppAudioComponent } from './app-audio/app-audio.component';
import { AppRecordComponent } from './app-record/app-record.component';
import { AppBmapComponent } from './app-bmap/app-bmap.component';
import { AppNoticeComponent } from './app-notice/app-notice.component';
import { AppSwiperComponent } from './app-swiper/app-swiper.component';
import { AppTabsComponent } from './app-tabs/app-tabs.component';
import { AppInputComponent } from './app-input/app-input.component';
import { AppFormRowComponent } from './app-form-row/app-form-row.component';
import { AppPageComponent } from './app-page/app-page.component';
import { AppStickyComponent } from './app-sticky/app-sticky.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppGridsComponent } from './app-grids/app-grids.component';
import { AppBoxComponent } from './app-box/app-box.component';

export const components = [
  AppHeaderComponent,
  AppUploaderComponent,
  AppFooterComponent,
  AppAudioComponent,
  AppRecordComponent,
  AppBmapComponent,
  AppNoticeComponent,
  AppSwiperComponent,
  AppTabsComponent,
  AppInputComponent,
  AppFormRowComponent,
  AppPageComponent,
  AppStickyComponent,
  AppNavComponent,
  AppGridsComponent,
  AppBoxComponent
];

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class We7TplMobileModule { }
