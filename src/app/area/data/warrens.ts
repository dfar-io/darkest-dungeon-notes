import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const warrens: Area = {
    id: AreaId.Warrens,
    heroes: [
        HeroId.Houndmaster,
        HeroId.Flagellant,
        HeroId.Jester
    ]
}