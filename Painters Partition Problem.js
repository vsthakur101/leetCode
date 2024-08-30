function isPossible(books, n, k, mid) {
  let student = 1;
  let currentPage = 0;
  for (let index = 0; index < n; index++) {
    if (currentPage + books[index] > mid) {
      student++;
      currentPage = books[index];
      if (student > k) return false;
    } else {
      currentPage += books[index];
    }
  }
  return true;
}

function allocateBook(books, k) {
  const n = books.length;
  if (k > n) return false;
  let low = Math.max(...books);
  let high = books.reduce((book, acc) => book + acc, 0);
  let ans = high;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(books, n, k, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(allocateBook([25, 46, 28, 49, 24], 4));
