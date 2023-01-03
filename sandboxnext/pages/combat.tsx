import { useEffect, useState } from "react";

export const initiative = async (initiativeBonus: number, diceRoll: number) => {
    type ResponseData = {
        roll?: number | null;
        message?: string | string[] | undefined;
        error?: string;
    };
    const { roll }: ResponseData = await fetch(
        `./api/diceroll/${diceRoll}`
    ).then((res) => res.json());
    return roll ? roll + initiativeBonus : null;
};

export const DiceRoll = (diceroll: number): number => {
    return Math.floor(Math.random() * Number(diceroll) + 1);
};

export function EventSimulation(rolls: number[], drop: number): number {
    if (!drop && drop !== 0) return -1;
    if (drop === 0) {
        return rolls.reduce(
            (previousValue: number, currentValue: number) =>
                previousValue + currentValue
        );
    }
    rolls.splice(rolls.indexOf(Math.min(...rolls)), 1);
    return EventSimulation(rolls, drop - 1);
}

export const generateHitPoints = (
    level: number,
    diceRoll: number,
    constitutionModifier: number,
    healthMinimum: number,
    hitPoints = 0
): number => {
    if (level === 1) return diceRoll + constitutionModifier + hitPoints;
    const bonusHealth = DiceRoll(diceRoll);
    return generateHitPoints(
        level - 1,
        diceRoll,
        constitutionModifier,
        healthMinimum,
        (hitPoints +=
            constitutionModifier +
            (bonusHealth > healthMinimum ? bonusHealth : healthMinimum))
    );
};

export const attackLandPhase = (
    attackBonus: number,
    armorClass: number
): number => {
    return DiceRoll(20) + attackBonus - armorClass;
};

export const attackDamagePhase = (
    modifier: number,
    attackDice: number,
    isAdventage: boolean
): number => {
    return DiceRoll(attackDice) + modifier;
};

export const spellDamagePhase = (
    spellDice: number,
    modifier: number,
    isAdventaged: boolean
) => {
    return DiceRoll(spellDice) + modifier;
};

//initiative - everyone, ties reroll - suprize no attack on first turn

//move square - 5 ft
//attack/action - attack, dodge, help, spellcasting, improvise, dash, disengage, ready, hide
//bonus action
//interaction
//reaction - disengage action can attack

//attackLandPhase miss>0<hit
//damagePhase

export default function Combat() {
    const [roll, setRoll] = useState<number | null>();

    useEffect(() => {
        const request = async () => {
            const value = await initiative(20, 20);
            setRoll(() => value);
        };
        request();
    }, []);
    return (
        <>
            <div>{`combat - ${roll}`}</div>
        </>
    );
}
