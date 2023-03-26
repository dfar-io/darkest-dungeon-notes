import { Component } from '@angular/core';
import { Area } from './area/area';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  areas = Object.values(Area).filter((item) => {
    return isNaN(Number(item));
  });

  heroes = Object.values(Hero).filter((item) => {
    return isNaN(Number(item));
  }).sort();
}
