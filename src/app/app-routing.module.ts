import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'area/:id', component: AreaComponent },
  { path: 'hero/:id', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
