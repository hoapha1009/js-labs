export function calculateS(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

export function calculateS2(n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}

export function calculateS3(n) {
  if (n <= 0) return 0;

  return Array.from({ length: n }, (v, i) => i + 1).reduce((sum, n) => (sum += n), 0);
}

export function calculateS4(n) {
  if (n <= 0) return 0;

  let sum = 0;
  Array.from({ length: n }, (v, i) => i + 1).forEach((n) => (sum += n));

  return sum;
}
