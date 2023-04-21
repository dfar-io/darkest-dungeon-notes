import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const weald: Area = {
    id: AreaId.Weald,
    heroes: [
        HeroId.ManAtArms,
        HeroId.Flagellant,
        HeroId.Shieldbreaker
    ]
}