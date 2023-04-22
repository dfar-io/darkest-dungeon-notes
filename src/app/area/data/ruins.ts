import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const ruins: Area = {
    id: AreaId.Ruins,
    heroes: [
        HeroId.Crusader,
        HeroId.PlagueDoctor,
        HeroId.Shieldbreaker
    ]
}