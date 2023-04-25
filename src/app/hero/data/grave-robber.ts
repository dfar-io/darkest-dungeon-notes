import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const graveRobber: Hero = {
    id: HeroId.GraveRobber,
    position: [2,0,2,0],
    moves: [
        'Lunge',
        'Fade',
        'Pick',
        'Dagger/Darts'
    ],
    trinkets: [
        Trinket.RaidersTailsman,
        Trinket.SharpenedLetterOpener
    ],
    campSkills: [
      'Night Moves',
      'Snuff Box',
      'Gallows Humor',
      'Encourage'
    ]
}
