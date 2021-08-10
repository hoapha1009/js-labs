import { calculateS, calculateS2, calculateS3, calculateS4 } from './00-cal-s.js';
// Bài 1: Tính S(n) = 1 + 2 + 3 + ... + n

//function calculateS(n) {}
// n <= 0 --> 0
// n > 0 --> sum
// n = 1 --> 1
// n = 2 --> 3
// n = 3 --> 6

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateS(-1)).toBe(0);
    expect(calculateS(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calculateS(1)).toBe(1);
    expect(calculateS(2)).toBe(3);
    expect(calculateS(3)).toBe(6);
    expect(calculateS(10)).toBe(55);
  });
});

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateS2(-1)).toBe(0);
    expect(calculateS2(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calculateS2(1)).toBe(1);
    expect(calculateS2(2)).toBe(3);
    expect(calculateS2(3)).toBe(6);
    expect(calculateS2(10)).toBe(55);
  });
});

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateS3(-1)).toBe(0);
    expect(calculateS3(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calculateS3(1)).toBe(1);
    expect(calculateS3(2)).toBe(3);
    expect(calculateS3(3)).toBe(6);
    expect(calculateS3(10)).toBe(55);
  });
});

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateS4(-1)).toBe(0);
    expect(calculateS4(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calculateS4(1)).toBe(1);
    expect(calculateS4(2)).toBe(3);
    expect(calculateS4(3)).toBe(6);
    expect(calculateS4(10)).toBe(55);
  });
});
