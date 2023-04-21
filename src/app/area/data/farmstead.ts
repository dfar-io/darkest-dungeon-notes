import { HeroId } from "src/app/hero/hero"
import { Area, AreaId } from "../area"

export const farmstead: Area = {
    id: AreaId.Farmstead,
    heroes: [
        HeroId.Highwayman,
        HeroId.Shieldbreaker,
        HeroId.Leper,
        HeroId.Jester,
        HeroId.Vestal
    ]
}