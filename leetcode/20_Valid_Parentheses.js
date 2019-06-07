/*  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
    determine if the input string is valid.

    An input string is valid if:
        1.Open brackets must be closed by the same type of brackets.
        2.Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:
        Input: "()"
        Output: true
    Example 2:
        Input: "()[]{}"
        Output: true
    Example 3:
        Input: "(]"
        Output: false
    Example 4:
        Input: "([)]"
        Output: false
    Example 5:
        Input: "{[]}"
        Output: true 
*/

function isValid(string) {
  const length = string.length;
  const arr = [];
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  for (let i = 0; i < length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      arr.push(string[i]);
    } else if (string[i] === ")" || string[i] === "}" || string[i] === "]") {
      const left = arr.pop();
      if (mapper[left] !== string[i]) {
        return false;
      }
    }
  }
  if (arr.length !== 0) return false;
  return true;
}

console.log(isValid("()[]{}"));
