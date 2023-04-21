import { Component } from '@angular/core';
import { AreaId } from './area/area';
import { HeroId } from './hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  areas = Object.values(AreaId).filter((item) => {
    return isNaN(Number(item));
  });

  heroes = Object.values(HeroId).filter((item) => {
    return isNaN(Number(item));
  }).sort();
}
