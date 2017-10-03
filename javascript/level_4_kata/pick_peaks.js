function pickPeaks(arr) {
  let answer = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          break;
        }
        if (arr[i] > arr[j]) {
          answer.pos.push(i);
          answer.peaks.push(arr[i]);
          break;
        }
      }
    }
  }
  return answer;
}
