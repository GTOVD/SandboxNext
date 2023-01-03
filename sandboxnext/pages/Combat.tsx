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
    saveDC: number,
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

//attackLandPhase - miss > 0 <= hit
//damagePhase

//death d20 - failure > 10 <= success - recevies damage or crit = failure
// medicine check failure > 10 <= success - stable
//heal - spell dice for health
//damage double hp is insta death
export default function Combat() {
    return <div>{"combat"}</div>;
}
