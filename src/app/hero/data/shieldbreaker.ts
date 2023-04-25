import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const shieldbreaker: Hero = {
    id: HeroId.Shieldbreaker,
    position: [0,1,2,2],
    moves: [
        'Pierce',
        'Sway',
        'Puncture/Adders',
        'Capitate/Expose'
    ],
    trinkets: [
        Trinket.SpectralSpeartip,
        Trinket.FeatherCrystal
    ],
    campSkills: [
      'Encourage',
      'Wound Care'
    ]
}
