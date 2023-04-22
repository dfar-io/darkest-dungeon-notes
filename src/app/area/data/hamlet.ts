import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const hamlet: Area = {
    id: AreaId.Hamlet,
    heroes: [
        HeroId.BountyHunter,
        HeroId.ManAtArms,
        HeroId.Shieldbreaker
    ]
}