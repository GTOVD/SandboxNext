export function DiceRoll(sides: number): number {
    return Math.floor(Math.random() * sides + 1);
}

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
