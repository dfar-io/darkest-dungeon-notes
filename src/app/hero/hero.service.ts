import { Injectable } from '@angular/core';
import { abomination } from './data/abomination';
import { arbalest } from './data/arbalest';
import { bountyHunter } from './data/bounty-hunter';
import { crusader } from './data/crusader';
import { flagellant } from './data/flagellant';
import { graveRobber } from './data/grave-robber';
import { hellion } from './data/hellion';
import { highwayman } from './data/highwayman';
import { houndmaster } from './data/houndmaster';
import { jester } from './data/jester';
import { leper } from './data/leper';
import { manAtArms } from './data/man-at-arms';
import { occultist } from './data/occultist';
import { plagueDoctor } from './data/plague-doctor';
import { shieldbreaker } from './data/shieldbreaker';
import { vestal } from './data/vestal';
import { Hero } from './hero';
import { antiquarian } from './data/antiquarian';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  data = [
    abomination,
    antiquarian,
    arbalest,
    bountyHunter,
    crusader,
    flagellant,
    graveRobber,
    hellion,
    highwayman,
    houndmaster,
    jester,
    leper,
    manAtArms,
    occultist,
    plagueDoctor,
    shieldbreaker,
    vestal
  ]

  getHeroById(id: string): Hero {
    const result =  this.data.find(h => h.id === id);

    if (result === undefined) {
      throw new Error(`Cannot find hero with id '${id}'`);
    }

    return result;
  }
}
