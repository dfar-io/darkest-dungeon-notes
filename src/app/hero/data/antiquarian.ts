import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const antiquarian: Hero = {
    id: HeroId.Antiquarian,
    position: [2,1,1,2],
    moves: [
        'Protect Me',
        'Stab/Blight (lv 3)',
        'Flashpowder/Invig (lv 3)',
        'Heal'
    ],
    trinkets: [
        Trinket.TheMastersEssence,
        Trinket.CandleOfLife,
        Trinket.BagOfMarbles,
        Trinket.FleetFloren
    ]
}