function sumPairs(ints, s) {
  let hash = {};
  for (let i = 0; i < ints.length; i++) {
    let n = ints[i];
    if (hash[s-n] === undefined) {
      hash[n] = n;
    } else {
      return [s-n,n];
    }
  }
  return undefined;
}
