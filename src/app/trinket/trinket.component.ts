import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroTrinket, heroTrinketList } from '../data/hero-trinket';

@Component({
  selector: 'app-trinket',
  templateUrl: './trinket.component.html',
  styleUrls: ['./trinket.component.css']
})
export class TrinketComponent {
  trinket = ""
  heroTrinkets: HeroTrinket[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trinket = params['name'] as string;
      this.heroTrinkets = heroTrinketList.filter((heroTrinket) => {
        return heroTrinket.trinket.toString() === this.trinket;
      });
    });
  }
}
