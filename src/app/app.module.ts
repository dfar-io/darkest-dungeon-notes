import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { HeroComponent } from './hero/hero.component';
import { TrinketComponent } from './trinket/trinket.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    HeroComponent,
    TrinketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
