import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const leper: Hero = {
    id: HeroId.Leper,
    position: [0,0,1,2],
    moves: [
        'Chop',
        'Solemnity',
        'Intimidate',
        'Hew/Purge/Revenge (bosses)'
    ],
    trinkets: [
        Trinket.FortunateArmlet,
        Trinket.FocusRing
    ],
    campSkills: [
      'Reflection',
      'Quarantine',
      'Bloody Shroud',
      'Wound Care'
    ]
}
