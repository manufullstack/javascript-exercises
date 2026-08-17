import { sumTwoNumbers } from "./sum";
import { describe, expect, it } from "vitest";

describe("sumTwoNumbers", () => {
  it("adding two positive numbers", () => {
    expect(sumTwoNumbers(2, 5)).toBe(7);
  });

  it("adding two negative numbers", () => {
    expect(sumTwoNumbers(-2, -6)).toBe(-8);
  });

  it("adding negative and positive numbers", () => {
    expect(sumTwoNumbers(-30, 100)).toBe(70);
  });
});
