import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { FrameWholeModule } from 'ngx-liburg-frame-side';
import { CONFIG_MAIN } from '../@core/routerConfig';
import { IconCoreModule } from 'ngx-liburg-icon';
import { ShellComponent } from './shell/shell.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule,
    FrameWholeModule.forRoot(CONFIG_MAIN),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    IconCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
