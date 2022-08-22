import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {routes} from './app.routing';
import {TestViewComponent} from './test-view/test-view.component';
import {TestOldComponent} from './test-old/test-old.component';
import {FrameWholeModule} from "ngx-liburg-frame-side";
import {CONFIG_MAIN} from "../@core/routerConfig";
import {IconCoreModule} from "ngx-liburg-icon";

@NgModule({
  declarations: [TestViewComponent, AppComponent, TestOldComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FrameWholeModule.forRoot(CONFIG_MAIN), IconCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
