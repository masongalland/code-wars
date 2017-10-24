function stray(numbers) {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
}
