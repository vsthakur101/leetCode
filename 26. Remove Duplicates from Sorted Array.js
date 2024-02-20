/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] !== nums[index + 1]) {
      nums[k] = nums[index + 1];
      k++;
    }
    return k;
  }
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 6, 9]));
