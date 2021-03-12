import {Rounding, scaleWithRounding} from "@evolved/utils/math";

describe('Math utilities', () => {
   describe('scaleWithRounding', () => {
       it('should scale', () => {
          expect(scaleWithRounding(10, 0.5)).toBe(5);
       });

       it('should round correctly', () => {
           expect(scaleWithRounding(5, 0.123, Rounding.FLOOR)).toBe(0);
           expect(scaleWithRounding(5, 0.123, Rounding.CEIL)).toBe(1);
       });
   });
});
