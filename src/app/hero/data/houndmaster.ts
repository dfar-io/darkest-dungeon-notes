import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const houndmaster: Hero = {
    id: HeroId.Houndmaster,
    position: [2,2,2,0],
    moves: [
        'Rush',
        'Blackjac (pos 2)/Cry Havoc (pos 3-4)',
        'Harry/Whistle',
        'Heal/Guard'
    ],
    trinkets: [
        Trinket.EvidenceOfCorruption,
        Trinket.AncestorsPistol
    ]
}