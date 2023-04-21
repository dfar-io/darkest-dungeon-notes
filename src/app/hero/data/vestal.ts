import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const vestal: Hero = {
    id: HeroId.Vestal,
    position: [2,2,1,0],
    moves: [
        'Stun',
        'Judgement',
        'Heal',
        'Group Heal'
    ],
    trinkets: [
        Trinket.SalaciousDiary,
        Trinket.JuniasHead,
        Trinket.AncestorsMap
    ]
}