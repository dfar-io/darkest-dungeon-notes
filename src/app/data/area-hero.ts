import { Area } from "../area/area";
import { Hero } from "../hero/hero";

export interface AreaHero {
    area: Area,
    hero: Hero,
    score?: number,
    note: string
}

export const areaHeroList: AreaHero[] = [
    { area: Area.Ruins, hero: Hero.Crusader, note: "Extra damage with Holy Lance, Smite" },
    { area: Area.Ruins, hero: Hero.GraveRobber, note: "Handles bone courtiers well with Lunge" },
    { area: Area.Ruins, hero: Hero.PlagueDoctor, note: "Blight" },
    { area: Area.Ruins, hero: Hero.Flagellant, score: -1, note: "bleed ineffective" },
    { area: Area.Ruins, hero: Hero.Houndmaster, score: -1, note: "bleed ineffective" },
    { area: Area.Warrens, hero: Hero.Flagellant, note: "bleed" },
    { area: Area.Warrens, hero: Hero.BountyHunter, note: "extra human damage" },
    { area: Area.Warrens, hero: Hero.Houndmaster, note: "extra human damage" },
    { area: Area.Warrens, hero: Hero.Jester, note: "bleed" },
    { area: Area.Warrens, hero: Hero.GraveRobber, note: "camp disease removal" },
    { area: Area.Warrens, hero: Hero.PlagueDoctor, score: -1, note: "blight resist" },
    { area: Area.Weald, hero: Hero.Flagellant, note: "bleed" },
    { area: Area.Weald, hero: Hero.Houndmaster, note: "bleed, whistle" },
    { area: Area.Weald, hero: Hero.Arbalest, note: "mark synergy with HM" },
    { area: Area.Weald, hero: Hero.Hellion, note: "bleed" },
    { area: Area.Weald, hero: Hero.Highwayman, note: "open vein" },
    { area: Area.Cove, hero: Hero.PlagueDoctor, note: "blight" },
    { area: Area.Cove, hero: Hero.Occultist, note: "extra eldritch damage" },
    { area: Area.Cove, hero: Hero.Flagellant, score: -1, note: "bleed resist" },
    { area: Area.Courtyard, hero: Hero.Flagellant, score: 2, note: "bleed, stress relief" },
    { area: Area.Courtyard, hero: Hero.Jester, score: 2, note: "bleed, stress relief" },
    { area: Area.Courtyard, hero: Hero.Houndmaster, score: 2, note: "bleed, stress relief" },
    { area: Area.Courtyard, hero: Hero.Highwayman, note: "open vein" },
    { area: Area.Courtyard, hero: Hero.PlagueDoctor, note: "battlefield medicine against bleeds" },
    { area: Area.Farmstead, hero: Hero.Vestal, note: "healing in long battle" },
    { area: Area.Farmstead, hero: Hero.Jester, note: "stress heal over long battle" },
    { area: Area.Farmstead, hero: Hero.Shieldbreaker, note: "pass guard from Miller" },
]
