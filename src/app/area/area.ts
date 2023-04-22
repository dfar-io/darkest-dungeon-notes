import { HeroId } from "../hero/hero";

export enum AreaId {
    Ruins = "ruins",
    Warrens = "warrens",
    Weald = "weald",
    Cove = "cove",
    Courtyard = "courtyard",
    Farmstead = "farmstead",
    Hamlet = "hamlet",
    DarkestDungeon1 = "darkest-dungeon-1",
    DarkestDungeon2 = "darkest-dungeon-2",
    DarkestDungeon3 = "darkest-dungeon-3",
    DarkestDungeon4 = "darkest-dungeon-4",
}

export interface Area {
    id: AreaId,
    heroes: HeroId[]
}