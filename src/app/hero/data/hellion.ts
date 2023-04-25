import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const hellion: Hero = {
    id: HeroId.Hellion,
    position: [0,0,1,2],
    moves: [
        'Swan',
        'If It Bleeds',
        'Bleed Out/Hack',
        'Yawp'
    ],
    trinkets: [
        Trinket.HeavensHairpin,
        Trinket.SurgicalGloves
    ],
    campSkills: [
      'Sharpen Spear/Battle Trance',
      'Revel',
      'Encourage',
      'Wound Care'
    ]
}
