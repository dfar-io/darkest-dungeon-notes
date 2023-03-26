import { Hero } from "../hero/hero";

export interface HeroHero {
    hero1: Hero,
    hero2: Hero,
    note: string
}

export const heroHeroList: HeroHero[] = [
    { hero1: Hero.PlagueDoctor, hero2: Hero.Flagellant, note: "Blinding Gas/Rain of Sorrows, Battlefield Med./Reclaim" },
    { hero1: Hero.BountyHunter, hero2: Hero.BountyHunter, note: "Mark/Stun, Attack" },
    { hero1: Hero.Crusader, hero2: Hero.Highwayman, note: "Dueling/Holy Lance, some healing, 3-4 or 2-3" },
    { hero1: Hero.Antiquarian, hero2: Hero.Highwayman, note: "Protect Me/Riposte" },
    { hero1: Hero.Vestal, hero2: Hero.Jester, note: "Strong Recovery/Ballad (Shieldbreaker, Hellion, Leper)" },
    { hero1: Hero.Leper, hero2: Hero.Jester, note: "Ballad helps Leper accuracy, speed" },
    { hero1: Hero.GraveRobber, hero2: Hero.Crusader, note: "x2 Lunge/Holy Lance, GR 4, Crusader 2" },
    { hero1: Hero.GraveRobber, hero2: Hero.Abomination, note: "Blight synergy (Beast bile/Lunge), Abom 2, GR 4" },
    { hero1: Hero.Arbalest, hero2: Hero.Occultist, note: "Occultist mark, arbalest shot, both healing" },
    { hero1: Hero.Flagellant, hero2: Hero.ManAtArms, note: "MAA protects Flagellant at low HP, Flag stress heals MAA" },
    { hero1: Hero.BountyHunter, hero2: Hero.Houndmaster, note: "Mark synergy" },
    { hero1: Hero.Arbalest, hero2: Hero.Houndmaster, note: "Mark synergy" },
    { hero1: Hero.Arbalest, hero2: Hero.BountyHunter, note: "Mark synergy" }
]