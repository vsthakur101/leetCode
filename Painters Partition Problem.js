function isPossible(board, k, n, mid) {
  let painter = 1;
  let currentTime = 0;
  for (let index = 0; index < n; index++) {
    if (currentTime + board[index] > mid) {
      painter++;
      currentTime = board[index];
      if (painter > k) return false;
    } else {
      currentTime += board[index];
    }
  }
  return true;
}

function paintersPartition(board, painters) {
  let n = board.length;
  let low = 0;
  let high = 0;
  for (let index = 0; index < n; index++) {
    high += board[index];
  }

  let result = high;
  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    if (isPossible(board, painters, n, mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

console.log(paintersPartition([5, 10, 30, 20, 15, 35], 5));
