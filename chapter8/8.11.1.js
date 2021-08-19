let input = 100;

const MOD = 1000000007;

let cache = Array(101).fill(-1);

const tiling = (width) => {
  if (width <= 1) return 1;
  if (cache[width] != -1) return cache[width];
  return cache[width] = (tiling(width - 2) + tiling(width - 1)) % MOD;
};

console.log(tiling(input))