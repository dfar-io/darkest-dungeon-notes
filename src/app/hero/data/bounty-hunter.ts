import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const bountyHunter: Hero = {
    id: HeroId.BountyHunter,
    position: [0,2,2,1],
    moves: [
        'Flashbang',
        'Finish',
        'Collect',
        'Mark/Uppercut'
    ],
    trinkets: [
        Trinket.HuntersTalon,
        Trinket.StunAmuletDazzlingCharm
    ],
    campSkills: [
      'This is How We Do it',
      'Planned Takedown (bosses)',
      'Encourage',
      'Wound Care'
    ]
}
