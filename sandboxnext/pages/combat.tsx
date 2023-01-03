import { DiceRoll, EventSimulation, generateHitPoints } from "./api/diceroll";

export const initiative = (initiativeBonus: number, diceRoll: number) => {
    return DiceRoll(diceRoll) + initiativeBonus;
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
    return <div>{"combat"}</div>;
}
