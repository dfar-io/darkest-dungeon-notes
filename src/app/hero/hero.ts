import { AreaId } from "../area/area"
import { Trinket } from "../trinket/trinket"

export enum HeroId {
    Abomination = "abomination",
    Antiquarian = "antiquarian",
    Arbalest = "arbalest",
    BountyHunter = "bounty-hunter",
    Crusader = "crusader",
    Flagellant = "flagellant",
    GraveRobber = "grave-robber",
    Hellion = "hellion",
    Highwayman = "highwayman",
    Houndmaster = "houndmaster",
    Jester = "jester",
    Leper = "leper",
    ManAtArms = "man-at-arms",
    Occultist = "occultist",
    PlagueDoctor = "plague-doctor",
    Shieldbreaker = "shieldbreaker",
    Vestal = "vestal"
}

export interface Hero {
    id: HeroId,
    position: number[],
    moves: string[],
    trinkets: Trinket[]
}
