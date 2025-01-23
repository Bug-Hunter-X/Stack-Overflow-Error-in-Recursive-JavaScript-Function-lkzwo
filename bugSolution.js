function foo(a, b) {
  let sum = b;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum; 
}
//For large numbers, using the iterative approach is much more efficient and avoids stack overflow errors.