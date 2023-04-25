import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const plagueDoctor: Hero = {
    id: HeroId.PlagueDoctor,
    position: [2,2,0,0],
    moves: [
        'Blinding',
        'Plague Grenade',
        'Heal',
        'Disorienting/Noxious'
    ],
    trinkets: [
        Trinket.BlasphemousVial,
        Trinket.FeatherCrystal
    ],
    campSkills: [
      'Leeches/The Cure',
      'Encourage',
      'Vapors/Wound Care'
    ]
}
