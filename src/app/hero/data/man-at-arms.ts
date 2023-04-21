import { Hero, HeroId } from "../hero"
import { Trinket } from "src/app/trinket/trinket"

export const manAtArms: Hero = {
    id: HeroId.ManAtArms,
    position: [0,1,2,2],
    moves: [
        'Rampart',
        'Defender',
        'Command',
        'Crush/Retribution'
    ],
    trinkets: [
        Trinket.OldUnitStandard,
        Trinket.FortifyingGarlic,
        Trinket.RampartShield
    ]
}