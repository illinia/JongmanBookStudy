// 분할 정복
function getNthFibo(n) {
  if (n <= 1) return n;
  else return getNthFibo(n - 1) + getNthFibo(n - 2);
}
// 시간복잡도 O(n), 공간복잡도 O(n)
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) return lastlast;
  if (n == 1) return last;
  return getNthFiboBetter(n - 1, last, lastlast + last);
}

