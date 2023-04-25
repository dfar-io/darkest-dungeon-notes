import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const occultist: Hero = {
    id: HeroId.Occultist,
    position: [2,2,2,1],
    moves: [
        'Stab (not pos 4)',
        'Stun (pos 1-2)/Abyss (pos 3-4)',
        'Heal',
        'Weak/Vuln/Pull'
    ],
    trinkets: [
        Trinket.VialOfSand,
        Trinket.FeatherCrystal
    ],
    campSkills: [
      'Dark Strength',
      'Unspeakable Commune',
      'Encourage',
      'Wound Care'
    ]
}
