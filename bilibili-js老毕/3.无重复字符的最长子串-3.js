/**
 * @param {string} s
 * @return {number}
 * 考察点： 滑动窗口，双指针.
 * 题解： 1. 创建一个set，2.  两个指针，第一个指向字符串的开头，第二个随着for循环遍历字符串
 * 3. 如果set里没有s[i]，说明目前为止还没有重复的字符，把s[i]添加到set，然后更新最大不重复字符的数量
 * 4. 如果set里有s[i]，则从set里开始删除s[j], 如此反复直到set里没有s[i]为止。
 * 5. 重复步骤 3 和 4，直到遍历完整个字符串。
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0,
    j = 0,
    maxLength = 0;
  if (s.length === 0) {
    return 0;
  }
  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      // set里没有新元素
      set.add(s[i]);
      maxLength = Math.max(set.size, maxLength);
    } else {
      // set里有新元素
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};
