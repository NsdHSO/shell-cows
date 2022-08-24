import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule }            from '@angular/router';
import { FrameWholeModule }        from 'ngx-liburg-frame-side';
import { IconCoreModule }          from 'ngx-liburg-icon';
import { CONFIG_MAIN }             from '../@core/routerConfig';

import { AppComponent }   from './app.component';
import { routes }         from './app.routing';
import { ShellComponent } from './shell/shell.component';

@NgModule ( {
  declarations : [
    AppComponent,
    ShellComponent
  ],
  imports      : [
    BrowserModule,
    FrameWholeModule.forRoot ( CONFIG_MAIN ),
    RouterModule.forRoot ( routes ),
    BrowserAnimationsModule,
    IconCoreModule,
  ],
  providers    : [],
  bootstrap    : [ AppComponent ],
} )
export class AppModule {}
