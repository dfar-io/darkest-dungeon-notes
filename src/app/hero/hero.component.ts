import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaHero, areaHeroList } from '../data/area-hero';
import { HeroHero, heroHeroList } from '../data/hero-hero';
import { HeroTrinket, heroTrinketList } from '../data/hero-trinket';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero = "";
  areaHeroes: AreaHero[] = [];
  heroHeroes: HeroHero[] = [];
  heroTrinkets: HeroTrinket[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const heroName = params['name'];
      this.hero = heroName as string;
      this.areaHeroes = areaHeroList.filter((areaHero) => {
        return areaHero.hero.toString() === this.hero;
      });
      this.heroHeroes = heroHeroList.filter((heroHero) => {
        return heroHero.hero1.toString() === this.hero ||
               heroHero.hero2.toString() === this.hero;
      });
      this.heroTrinkets = heroTrinketList.filter((heroTrinket) => {
        return heroTrinket.hero.toString() === this.hero;
      });
    });
  }
}
