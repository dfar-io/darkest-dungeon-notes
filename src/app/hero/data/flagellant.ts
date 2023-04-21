import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const flagellant: Hero = {
    id: HeroId.Flagellant,
    position: [0,0,2,2],
    moves: [
        'Punish',
        'Rain of Sorrows',
        'Reclaim/Endure',
        'Redeem/Exsang'
    ],
    trinkets: [
        Trinket.FleshesHeart,
        Trinket.BleedAmulet
    ]
}