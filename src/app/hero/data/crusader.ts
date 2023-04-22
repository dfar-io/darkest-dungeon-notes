import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const crusader: Hero = {
    id: HeroId.Crusader,
    position: [2,2,2,1],
    moves: [
        'Lance',
        'Inspiring',
        'Stun',
        'Heal/Smite'
    ],
    trinkets: [
        Trinket.AncestorsScroll,
        Trinket.ParalyzersCrest
    ]
}