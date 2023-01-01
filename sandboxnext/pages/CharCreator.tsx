import { useEffect, useRef } from "react";
import { DiceRoll, EventSimulation, generateHitPoints } from "./api/DiceRoll";
type classTypeUnion =
    | "Barbarian"
    | "Bard"
    | "Cleric"
    | "Druid"
    | "Fighter"
    | "Monk"
    | "Paladin"
    | "Ranger"
    | "Rogue"
    | "Sorcerer"
    | "Warlock"
    | "Wizard";
type raceTypeUnion =
    | "Dwarf"
    | "Elf"
    | "Halfling"
    | "Human"
    | "Dragonborn"
    | "Gnome"
    | "Half-Elf"
    | "Half-Orc"
    | "Tiefling";

const characterGenerator = (prace: raceTypeUnion, pclass: classTypeUnion) => {
    const offenseEquipments = {
        shortSword: 6,
    };
    const defenseEqiupments = {
        leatherArmor: 11,
    };
    const currentEquipment = {
        weapon: offenseEquipments.shortSword,
        armor: defenseEqiupments.leatherArmor,
    };

    type raceType = {
        name: raceTypeUnion;
        proficiencyBonus: proficiencyBonusType;
        speed: number;
    };
    type racesType = {
        dwarf: raceType;
        elf: raceType;
        halfling: raceType;
        human: raceType;
        dragonborn: raceType;
        gnome: raceType;
        halfElf: raceType;
        halfOrc: raceType;
        tiefling: raceType;
    };
    const races: racesType = {
        dwarf: {
            name: "Dwarf",
            proficiencyBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 2,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            speed: 25,
        },
        elf: {
            name: "Elf",
            proficiencyBonus: {
                strength: 0,
                dexterity: 2,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            speed: 30,
        },
        halfling: {
            name: "Halfling",
            proficiencyBonus: {
                strength: 0,
                dexterity: 2,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            speed: 25,
        },
        human: {
            name: "Human",
            proficiencyBonus: {
                strength: 1,
                dexterity: 1,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            speed: 30,
        },
        dragonborn: {
            name: "Dragonborn",
            proficiencyBonus: {
                strength: 2,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 1,
            },
            speed: 30,
        },
        gnome: {
            name: "Gnome",
            proficiencyBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 2,
                wisdom: 0,
                charisma: 0,
            },
            speed: 25,
        },
        halfElf: {
            name: "Half-Elf",
            proficiencyBonus: {
                strength: 1,
                dexterity: 0,
                constitution: 1,
                intelligence: 0,
                wisdom: 0,
                charisma: 2,
            },
            speed: 30,
        },
        halfOrc: {
            name: "Half-Orc",
            proficiencyBonus: {
                strength: 2,
                dexterity: 0,
                constitution: 1,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            speed: 30,
        },
        tiefling: {
            name: "Tiefling",
            proficiencyBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 1,
                wisdom: 0,
                charisma: 2,
            },
            speed: 30,
        },
    };
    type levelType = {
        [level: number]: {
            level: number;
            proficiencyBonus: number;
            features: string[];
        };
    };
    type classType = {
        name: classTypeUnion;
        savingThrowBonus: proficiencyBonusType;
        skillsBonus: skillsType;
        hitDie: number;
        healthMinimum: number;
        level: levelType;
    };
    const level: levelType = {
        1: {
            level: 1,
            proficiencyBonus: 2,
            features: ["Rage", "Unarmored Defense"],
        },
        2: {
            level: 2,
            proficiencyBonus: 2,
            features: ["Rage", "Unarmored Defense"],
        },
        3: {
            level: 3,
            proficiencyBonus: 2,
            features: ["Rage", "Unarmored Defense"],
        },
        4: {
            level: 4,
            proficiencyBonus: 2,
            features: ["Rage", "Unarmored Defense"],
        },
        5: {
            level: 5,
            proficiencyBonus: 3,
            features: ["Rage", "Unarmored Defense"],
        },
        6: {
            level: 6,
            proficiencyBonus: 3,
            features: ["Rage", "Unarmored Defense"],
        },
        7: {
            level: 7,
            proficiencyBonus: 3,
            features: ["Rage", "Unarmored Defense"],
        },
        8: {
            level: 8,
            proficiencyBonus: 3,
            features: ["Rage", "Unarmored Defense"],
        },
        9: {
            level: 9,
            proficiencyBonus: 4,
            features: ["Rage", "Unarmored Defense"],
        },
        10: {
            level: 10,
            proficiencyBonus: 4,
            features: ["Rage", "Unarmored Defense"],
        },
        11: {
            level: 11,
            proficiencyBonus: 4,
            features: ["Rage", "Unarmored Defense"],
        },
        12: {
            level: 12,
            proficiencyBonus: 4,
            features: ["Rage", "Unarmored Defense"],
        },
        13: {
            level: 13,
            proficiencyBonus: 5,
            features: ["Rage", "Unarmored Defense"],
        },
        14: {
            level: 14,
            proficiencyBonus: 5,
            features: ["Rage", "Unarmored Defense"],
        },
        15: {
            level: 15,
            proficiencyBonus: 5,
            features: ["Rage", "Unarmored Defense"],
        },
        16: {
            level: 16,
            proficiencyBonus: 5,
            features: ["Rage", "Unarmored Defense"],
        },
        17: {
            level: 17,
            proficiencyBonus: 6,
            features: ["Rage", "Unarmored Defense"],
        },
        18: {
            level: 18,
            proficiencyBonus: 6,
            features: ["Rage", "Unarmored Defense"],
        },
        19: {
            level: 19,
            proficiencyBonus: 6,
            features: ["Rage", "Unarmored Defense"],
        },
        20: {
            level: 20,
            proficiencyBonus: 6,
            features: ["Rage", "Unarmored Defense"],
        },
    };
    type classesType = {
        barbarian: classType;
        bard: classType;
        cleric: classType;
        druid: classType;
        fighter: classType;
        monk: classType;
        paladin: classType;
        ranger: classType;
        rogue: classType;
        sorcerer: classType;
        warlock: classType;
        wizard: classType;
    };
    const classes: classesType = {
        barbarian: {
            name: "Barbarian",
            savingThrowBonus: {
                strength: 1,
                dexterity: 0,
                constitution: 1,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 12,
            healthMinimum: 7,
            level: level,
        },
        bard: {
            name: "Bard",
            savingThrowBonus: {
                strength: 0,
                dexterity: 1,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 1,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        cleric: {
            name: "Cleric",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 1,
                charisma: 1,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        druid: {
            name: "Druid",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 1,
                wisdom: 1,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        fighter: {
            name: "Fighter",
            savingThrowBonus: {
                strength: 1,
                dexterity: 0,
                constitution: 1,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 10,
            healthMinimum: 6,
            level: level,
        },
        monk: {
            name: "Monk",
            savingThrowBonus: {
                strength: 1,
                dexterity: 1,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        paladin: {
            name: "Paladin",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 1,
                charisma: 1,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 10,
            healthMinimum: 6,
            level: level,
        },
        ranger: {
            name: "Ranger",
            savingThrowBonus: {
                strength: 1,
                dexterity: 1,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 10,
            healthMinimum: 6,
            level: level,
        },
        rogue: {
            name: "Rogue",
            savingThrowBonus: {
                strength: 0,
                dexterity: 1,
                constitution: 0,
                intelligence: 1,
                wisdom: 0,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        sorcerer: {
            name: "Sorcerer",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 1,
                intelligence: 0,
                wisdom: 0,
                charisma: 1,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 6,
            healthMinimum: 4,
            level: level,
        },
        warlock: {
            name: "Warlock",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 1,
                charisma: 1,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 8,
            healthMinimum: 5,
            level: level,
        },
        wizard: {
            name: "Wizard",
            savingThrowBonus: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 1,
                wisdom: 1,
                charisma: 0,
            },
            skillsBonus: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                desception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0,
            },
            hitDie: 6,
            healthMinimum: 4,
            level: level,
        },
    };
    type characterStatsType = {
        id: number;
        name: string;
        class: classType;
        level: number;
        background: string;
        race: raceType;
        alignment: string;
        experiencePoints: number;
        attributes: proficiencyBonusType;
    };
    const characterStats: characterStatsType = {
        id: 0,
        name: "",
        class:
            classes.barbarian.name === pclass
                ? classes.barbarian
                : classes.bard.name === pclass
                ? classes.bard
                : classes.cleric.name === pclass
                ? classes.cleric
                : classes.druid.name === pclass
                ? classes.druid
                : classes.fighter.name === pclass
                ? classes.fighter
                : classes.monk.name === pclass
                ? classes.monk
                : classes.paladin.name === pclass
                ? classes.paladin
                : classes.ranger.name === pclass
                ? classes.ranger
                : classes.rogue.name === pclass
                ? classes.rogue
                : classes.sorcerer.name === pclass
                ? classes.sorcerer
                : classes.warlock.name === pclass
                ? classes.warlock
                : classes.wizard,
        level: 2,
        background: "",
        race:
            races.dwarf.name === prace
                ? races.dwarf
                : races.elf.name === prace
                ? races.elf
                : races.halfling.name === prace
                ? races.halfling
                : races.human.name === prace
                ? races.human
                : races.dragonborn.name === prace
                ? races.dragonborn
                : races.gnome.name === prace
                ? races.gnome
                : races.halfElf.name === prace
                ? races.halfElf
                : races.halfOrc.name === prace
                ? races.halfOrc
                : races.tiefling,
        alignment: "",
        experiencePoints: 0,
        attributes: {
            strength: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
            dexterity: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
            constitution: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
            intelligence: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
            wisdom: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
            charisma: EventSimulation(
                [DiceRoll(6), DiceRoll(6), DiceRoll(6), DiceRoll(6)],
                1
            ),
        },
    };
    const inspiration = 0;
    const proficiencyBonus =
        characterStats.class.level[characterStats.level].proficiencyBonus;
    type proficiencyBonusType = {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    const savingThrows = {
        strength: Math.floor((characterStats.attributes.strength - 10) / 2),
        dexterity: Math.floor((characterStats.attributes.dexterity - 10) / 2),
        constitution: Math.floor(
            (characterStats.attributes.constitution - 10) / 2
        ),
        intelligence: Math.floor(
            (characterStats.attributes.intelligence - 10) / 2
        ),
        wisdom: Math.floor((characterStats.attributes.wisdom - 10) / 2),
        charisma: Math.floor((characterStats.attributes.charisma - 10) / 2),
    };
    const savingThrowsBonus = {
        strength:
            savingThrows.strength +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.strength +
                    characterStats.class.savingThrowBonus.strength),
        dexterity:
            savingThrows.dexterity +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.dexterity +
                    characterStats.class.savingThrowBonus.dexterity),
        constitution:
            savingThrows.constitution +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.constitution +
                    characterStats.class.savingThrowBonus.constitution),
        intelligence:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.intelligence +
                    characterStats.class.savingThrowBonus.intelligence),
        wisdom:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.wisdom +
                    characterStats.class.savingThrowBonus.wisdom),
        charisma:
            savingThrows.charisma +
            proficiencyBonus *
                (characterStats.race.proficiencyBonus.charisma +
                    characterStats.class.savingThrowBonus.charisma),
    };
    type skillsType = {
        acrobatics: number;
        animalHandling: number;
        arcana: number;
        athletics: number;
        desception: number;
        history: number;
        insight: number;
        intimidation: number;
        investigation: number;
        medicine: number;
        nature: number;
        perception: number;
        performance: number;
        persuasion: number;
        religion: number;
        slightOfHand: number;
        stealth: number;
        survival: number;
    };
    const skills: skillsType = {
        acrobatics:
            savingThrows.dexterity +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.dexterity +
                    characterStats.class.skillsBonus.acrobatics),
        animalHandling:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.wisdom +
                    characterStats.class.skillsBonus.animalHandling),
        arcana:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.intelligence +
                    characterStats.class.skillsBonus.arcana),
        athletics:
            savingThrows.strength +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.strength +
                    characterStats.class.skillsBonus.athletics),
        desception:
            savingThrows.charisma +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.charisma +
                    characterStats.class.skillsBonus.desception),
        history:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.intelligence +
                    characterStats.class.skillsBonus.history),
        insight:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.wisdom +
                    characterStats.class.skillsBonus.insight),
        intimidation:
            savingThrows.charisma +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.charisma +
                    characterStats.class.skillsBonus.intimidation),
        investigation:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.intelligence +
                    characterStats.class.skillsBonus.investigation),
        medicine:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.wisdom +
                    characterStats.class.skillsBonus.medicine),
        nature:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.intelligence +
                    characterStats.class.skillsBonus.nature),
        perception:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.wisdom +
                    characterStats.class.skillsBonus.perception),
        performance:
            savingThrows.charisma +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.charisma +
                    characterStats.class.skillsBonus.performance),
        persuasion:
            savingThrows.charisma +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.charisma +
                    characterStats.class.skillsBonus.persuasion),
        religion:
            savingThrows.intelligence +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.intelligence +
                    characterStats.class.skillsBonus.religion),
        slightOfHand:
            savingThrows.dexterity +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.dexterity +
                    characterStats.class.skillsBonus.slightOfHand),
        stealth:
            savingThrows.dexterity +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.dexterity +
                    characterStats.class.skillsBonus.stealth),
        survival:
            savingThrows.wisdom +
            proficiencyBonus *
                (characterStats.class.savingThrowBonus.wisdom +
                    characterStats.class.skillsBonus.survival),
    };
    const passiveWisdom = 0;
    const proficienciesAndLanguages = 0;
    const ArmorClass = currentEquipment.armor + savingThrows.dexterity;
    const initiative = savingThrows.dexterity;
    const speed = characterStats.race.speed;
    const currentHitPoints = generateHitPoints(
        characterStats.level,
        characterStats.class.hitDie,
        savingThrows.constitution,
        characterStats.class.healthMinimum
    );
    const temporaryHitPoints = 0;
    const hitDice = characterStats.class.hitDie;
    const attackBonus =
        currentEquipment.weapon +
        savingThrowsBonus.constitution +
        characterStats.class.level[characterStats.level].proficiencyBonus;
    const deathSaves = {
        successes: 0,
        failures: 0,
    };
    const attacksAndSpellcasting = 0;
    const personalityTraits = "";
    const ideals = "";
    const bonds = 0;
    const flaws = 0;
    const featuresAndTraits = 0;

    return {
        characterStats,
        inspiration,
        proficiencyBonus,
        savingThrows,
        savingThrowsBonus,
        skills,
        passiveWisdom,
        proficienciesAndLanguages,
        ArmorClass,
        initiative,
        speed,
        currentHitPoints,
        temporaryHitPoints,
        hitDice,
        deathSaves,
        attacksAndSpellcasting,
        currentEquipment,
        personalityTraits,
        ideals,
        bonds,
        flaws,
        featuresAndTraits,
    };
};

export default function CharCreator() {
    const char1 = useRef<{}>({});
    const char2 = useRef<{}>({});

    useEffect(() => {
        char1.current = characterGenerator("Dwarf", "Monk");
        console.log(char1.current);
        char2.current = characterGenerator("Elf", "Rogue");
        console.log(char2.current);
    }, []);

    return (
        <div>
            <div>{`${JSON.stringify(char1.current, null, "\t")}`}</div>
            <div>{`${JSON.stringify(char2.current, null, "\t")}`}</div>
        </div>
    );
}
