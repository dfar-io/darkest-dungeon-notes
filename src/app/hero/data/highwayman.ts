import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const highwayman: Hero = {
    id: HeroId.Highwayman,
    position: [2,2,1,0],
    moves: [
        'Duelist',
        'Wicked/Open',
        'Pistol',
        'Point Blank'
    ],
    trinkets: [
        Trinket.ShamefulLocket,
        Trinket.AncestorsSignetRing
    ],
    campSkills: [
      'Bandit\'s Sense',
      'Gallow\'s Humor',
      'Unparelled Finesse',
      'Encourage/Wound Care'
    ]
}
