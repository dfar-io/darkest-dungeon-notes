import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const arbalest: Hero = {
    id: HeroId.Arbalest,
    position: [2,2,0,0],
    moves: [
        'Sniper',
        'Heal',
        'Suppressing',
        'Flare'
    ],
    trinkets: [
        Trinket.ChildhoodTreasure,
        Trinket.MedicsGreaves,
        Trinket.DismasHead
    ],
    campSkills: [
      'Marching Plan',
      'Restring Crossbow',
      'Encourage',
      'Wound Care/Triage'
    ]
}
