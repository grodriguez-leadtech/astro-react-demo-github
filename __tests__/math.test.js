import { average } from "../src/lib/math.js";

describe("average function", () => {
  test("calculates average of numbers", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  test("returns NaN for empty array", () => {
    expect(average([])).toBeNaN();
  });
});
