function pow(n) {
  if (n < 1) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n % 2 === 1) {
    return false;
  }
  return pow(n / 2);
}

console.log(pow(1));
