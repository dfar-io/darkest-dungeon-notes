import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaHero, areaHeroList } from '../data/area-hero';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  area = "";
  areaHeroes: AreaHero[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const areaName = params['name'];
      this.area = areaName as string;
      this.areaHeroes = areaHeroList.filter((areaHero) => {
        return areaHero.area.toString() === this.area;
      });
    });
  }
}
