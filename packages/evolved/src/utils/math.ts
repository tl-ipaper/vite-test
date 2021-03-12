export enum Rounding {
    CEIL,
    FLOOR
}

/**
 * Scales the provided value and rounds the result using on of the rounding types.
 * @method
 * @param {number} originalValue - value to be scaled
 * @param {number} scale - the scale by which the value will be multiplied
 * @param {Rounding} rounding - the type of rounding applied
 * @return number
 */
export function scaleWithRounding(originalValue: number, scale: number, rounding: Rounding = Rounding.FLOOR): number {
    const scaled = originalValue * scale;
    if (isNaN(scaled)) {
        throw new Error('The type of original value and scale must be "number".');
    }
    switch (rounding) {
        case Rounding.CEIL:
            return Math.ceil(scaled);
        case Rounding.FLOOR:
            return Math.floor(scaled);
        default:
            throw new Error(`The specified rounding type is incorrect. Got: ${rounding}.`)
    }
}
