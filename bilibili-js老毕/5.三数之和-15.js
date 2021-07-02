/**
 * @param {number[]} nums
 * @return {number[][]}
 * 题解：
 * 1. 给数组排序
 * 2. 遍历数组，从 0 遍历到 length - 2
 * 3. 如果当前的数等于前一个数，则跳过这个数
 * 4. 如果数字不同，则设置 start = i + 1, end = length - 1， 查看i， start 和 end
 * 三个数的和比 0 大还是小，如果比 0 小，start++，如果比 0 大，end--，如果等于0，
 * 把这三个数加入到结果里。
 * 5. 返回结果
 *
 *
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] > 0) {
          end--;
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++;
        } else {
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        }
      }
    }
  }
  return result;
};
