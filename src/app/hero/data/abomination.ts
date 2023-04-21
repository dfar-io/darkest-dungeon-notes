import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const abomination: Hero = {
    id: HeroId.Abomination,
    position: [0,1,2,0],
    moves: [
        'Manacles',
        'Heal/Bile',
        'Rage/Rake',
        'Headbutt'
    ],
    trinkets: [
        Trinket.BrokenKey,
        Trinket.PadlockOfTransference,
        Trinket.StunAmuletDazzlingCharm,
    ]
}