import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkuComponent } from './shared/sku/sku.component';
import { SkuGroupComponent } from './shared/sku-group/sku-group.component';
import { AreaComponent } from './shared/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    SkuGroupComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
