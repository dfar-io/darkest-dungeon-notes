import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const courtyard: Area = {
    id: AreaId.Courtyard,
    heroes: [
        HeroId.Flagellant,
        HeroId.Houndmaster
    ]
}