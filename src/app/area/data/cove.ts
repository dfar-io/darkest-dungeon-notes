import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const cove: Area = {
    id: AreaId.Cove,
    heroes: [
        HeroId.Leper,
        HeroId.Occultist,
        HeroId.PlagueDoctor
    ]
}