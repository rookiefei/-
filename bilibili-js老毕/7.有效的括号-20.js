/**
 * @param {string} s
 * @return {boolean}
 * 题解： 利用stack，
 * 步骤：
 * 1. 创建一个 HashMap，把括号配对放进去
 * 2. 创建一个 stack, for循环遍历字符串，对于每一个字符，如果map里有这个key，那说明
 * 它是个左括号，从map里取得相对应的右括号，把它push进stack里。否则，它就是右括号，需要pop
 * 出stack里的第一个字符然后看它是否等于当前的字符。如果不相符，则返回false。
 * 3. 循环结束后 如果stack不为空，说明还剩一些左括号没有被关闭，返回false。否则返回true。
 */
var isValid = function (s) {
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else {
      let a = stack.pop();
      if (a !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
