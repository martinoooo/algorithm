/**
 * You have a lock in front of you with 4 circular wheels.
 * Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'.
 * The wheels can rotate freely and wrap around:
 * for example we can turn '9' to be '0', or '0' to be '9'.
 * Each move consists of turning one wheel one slot.
 *
  The lock initially starts at '0000', a string representing the state of the 4 wheels.

  You are given a list of deadends dead ends, meaning if the lock displays any of these codes,
  the wheels of the lock will stop turning and you will be unable to open it.

  Given a target representing the value of the wheels that will unlock the lock,
  return the minimum total number of turns required to open the lock, or -1 if it is impossible.

  Example 1:
    Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
  Output: 6
  Explanation:
    A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
    Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
    because the wheels of the lock become stuck after the display becomes the dead end "0102".

  Example 2:
    Input: deadends = ["8888"], target = "0009"
  Output: 1
  Explanation:
    We can turn the last wheel in reverse to move from "0000" -> "0009".

  Example 3:
    Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
  Output: -1
  Explanation:
    We can't reach the target without getting stuck.

  Example 4:
    Input: deadends = ["0000"], target = "8888"
  Output: -1


  Constraints:
    1 <= deadends.length <= 500
    deadends[i].length == 4
    target.length == 4
    target will not be in the list deadends.
    target and deadends[i] consist of digits only.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/open-the-lock
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string[]} deadends
* @param {string} target
* @return {number}
*/
var openLock = function (deadends, target) {
  return BFS(target);

  // 将 s[j] 向上拨动一次
  function plusOne(s, j) {
    const ch = s.split('');
    if (ch[j] == '9')
      ch[j] = '0';
    else
      ch[j] = Number(ch[j]) + 1;
    return ch.join('');
  }
  // 将 s[i] 向下拨动一次
  function minusOne(s, j) {
    const ch = s.split('');
    if (ch[j] == '0')
      ch[j] = '9';
    else
      ch[j] = Number(ch[j]) - 1;
    return ch.join('');
  }

  // BFS 框架，打印出所有可能的密码
  function BFS(target) {
    const deads = {};
    for (let s of deadends) deads[s] = 1;
    // 记录已经穷举过的密码，防止走回头路
    const visited = {};
    const q = [];
    // 从起点开始启动广度优先搜索
    let step = 0;
    q.push("0000");
    visited["0000"] = 1;

    while (q.length) {
      const sz = q.length;
      /* 将当前队列中的所有节点向周围扩散 */
      for (let i = 0; i < sz; i++) {
        const cur = q.shift();

        /* 判断是否到达终点 */
        if (deads[cur])
          continue;
        if (cur === target)
          return step;

        /* 将一个节点的未遍历相邻节点加入队列 */
        for (let j = 0; j < 4; j++) {
          const up = plusOne(cur, j);
          if (!visited[up]) {
            q.push(up);
            visited[up] = 1;
          }
          const down = minusOne(cur, j);
          if (!visited[down]) {
            q.push(down);
            visited[down] = 1;
          }
        }
      }
      /* 在这里增加步数 */
      step++;
    }
    // 如果穷举完都没找到目标密码，那就是找不到了
    return -1;
  }
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))