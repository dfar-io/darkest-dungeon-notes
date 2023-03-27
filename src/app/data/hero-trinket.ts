import { Area } from "../area/area";
import { Hero } from "../hero/hero";
import { Trinket } from "../trinket/trinket";

export interface HeroTrinket {
    hero: Hero,
    trinket: Trinket,
    note?: string
}

export const heroTrinketList: HeroTrinket[] = [
    { hero: Hero.Abomination, trinket: Trinket.BrokenKey },
    { hero: Hero.Abomination, trinket: Trinket.StunAmuletDazzlingCharm },
    { hero: Hero.Antiquarian, trinket: Trinket.MastersEssence },
    { hero: Hero.Antiquarian, trinket: Trinket.FeatherCrystal },
    { hero: Hero.Arbalest, trinket: Trinket.MedicsGreaves },
    { hero: Hero.Arbalest, trinket: Trinket.DismasHead },
    { hero: Hero.BountyHunter, trinket: Trinket.HuntersTalon },
    { hero: Hero.BountyHunter, trinket: Trinket.StunAmuletDazzlingCharm },
    { hero: Hero.Crusader, trinket: Trinket.ParalyzersCrest },
    { hero: Hero.Crusader, trinket: Trinket.AncestorsScroll },
    { hero: Hero.Flagellant, trinket: Trinket.HeartburstHood },
    { hero: Hero.Flagellant, trinket: Trinket.MartyrsSeal },
    { hero: Hero.Flagellant, trinket: Trinket.FleshsHeart },
    { hero: Hero.Flagellant, trinket: Trinket.BleedAmulet },
    { hero: Hero.GraveRobber, trinket: Trinket.RaidersTailsman },
    { hero: Hero.GraveRobber, trinket: Trinket.DismasHead },
    { hero: Hero.GraveRobber, trinket: Trinket.SharpenedLetterOpener },
    { hero: Hero.Hellion, trinket: Trinket.HeavensHairpin },
    { hero: Hero.Hellion, trinket: Trinket.SurgicalGloves },
    { hero: Hero.Highwayman, trinket: Trinket.ShamefulLocket },
    { hero: Hero.Highwayman, trinket: Trinket.AncestorsSignetRing },
    { hero: Hero.Houndmaster, trinket: Trinket.EvidenceOfCorruption },
    { hero: Hero.Houndmaster, trinket: Trinket.AncestorsPistol },
    { hero: Hero.Jester, trinket: Trinket.CriticalDice },
    { hero: Hero.Jester, trinket: Trinket.BarristansHead },
    { hero: Hero.Leper, trinket: Trinket.FortunateArmlet },
    { hero: Hero.Leper, trinket: Trinket.FocusRing },
    { hero: Hero.ManAtArms, trinket: Trinket.OldUnitStandard },
    { hero: Hero.ManAtArms, trinket: Trinket.FortifyingGarlic },
    { hero: Hero.ManAtArms, trinket: Trinket.RampartShield },
    { hero: Hero.Occultist, trinket: Trinket.VialOfSand },
    { hero: Hero.Occultist, trinket: Trinket.FeatherCrystal },
    { hero: Hero.PlagueDoctor, trinket: Trinket.BlasphemousVial },
    { hero: Hero.PlagueDoctor, trinket: Trinket.FeatherCrystal },
    { hero: Hero.Shieldbreaker, trinket: Trinket.SpectralSpeartip },
    { hero: Hero.Shieldbreaker, trinket: Trinket.FeatherCrystal },
    { hero: Hero.Vestal, trinket: Trinket.SalaciousDiary },
    { hero: Hero.Vestal, trinket: Trinket.AncestorsMap },
]