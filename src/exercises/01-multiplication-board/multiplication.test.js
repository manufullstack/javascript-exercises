import { multiplicationBoard } from "./multiplication";
import { describe, it, expect } from "vitest";

describe("Multiplication Board", () => {
  it("Multiplication for number 5", () => {
    expect(multiplicationBoard(5)).toEqual([
      "5 X 1 = 5",
      "5 X 2 = 10",
      "5 X 3 = 15",
      "5 X 4 = 20",
      "5 X 5 = 25",
      "5 X 6 = 30",
      "5 X 7 = 35",
      "5 X 8 = 40",
      "5 X 9 = 45",
      "5 X 10 = 50",
      "5 X 11 = 55",
      "5 X 12 = 60",
    ]);
  });
});
