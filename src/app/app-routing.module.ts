import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HeroComponent } from './hero/hero.component';
import { TrinketComponent } from './trinket/trinket.component';

const routes: Routes = [
  { path: 'area/:name', component: AreaComponent },
  { path: 'hero/:name', component: HeroComponent },
  { path: 'trinket/:name', component: TrinketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
