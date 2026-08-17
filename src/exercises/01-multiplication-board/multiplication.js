/**
 * Given a number, return full multiplication board(until number 12)
 *
 * Number = 5
 *
 * 5 X 1 = 5
 * 5 X 2 = 10
 * 5 X 3 = 15
 * 5 X 4 = 20
 * 5 X 5 = 25
 * 5 X 6 = 30
 * 5 X 7 = 35
 * 5 X 8 = 40
 * 5 X 9 = 45
 * 5 X 10 = 50
 * 5 X 11 = 55
 * 5 X 12 = 60
 *
 * Find to way for test this
 *
 */

export const multiplicationBoard = (n) => {
  const result = [];
  for (let i = 1; i < 13; i++) {
    result.push(`${n} X ${i} = ${n * i}`);
  }
  return result;
};

console.log(multiplicationBoard(5));
