import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const jester: Hero = {
    id: HeroId.Jester,
    position: [1,2,0,0],
    moves: [
        'Ballad',
        'Tune',
        'Slice Off',
        'Finale'
    ],
    trinkets: [
        Trinket.CriticalDice,
        Trinket.BarristansHead
    ],
    campSkills: [
      'Tiger\'s Eye',
      'Every Rose Has It\'s Thorns/Mockery',
      'Turn back Time/Encourage',
      'Wound Care'
    ]
}
