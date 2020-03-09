// complex methods

// 构造函数，默认为 0
complex = (x, y) => {
  return { x: x || 0, y: y || 0 };
};
// 从弧度构造单位复数
complex.fromAngle = angle => complex(Math.cos(angle), Math.sin(angle));
// 复数加复数
complex.add = (a, b) => complex(a.x + b.x, a.y + b.y);
// 复数乘复数
complex.mul = (a, b) => complex(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
// 数乘复数
complex.numMul = (n, c) => complex(n * c.x, n * c.y);
// 复数减复数
complex.minus = (a, b) => complex(a.x - b.x, a.y - b.y);
// array restructuring
flatten = matrix => matrix.reduce((pre, cur) => pre.concat(cur), []);
partition = (array, n) =>
  array.reduce(
    (pre, cur, i) => (pre[i % n] = pre[i % n] || []).push(cur) && pre,
    []
  );
transpose = matrix => partition(flatten(matrix), matrix[0].length);

recursiveDFT = (a, inverse) => {
  if (a.length === 1) return a;

  return flatten(
    transpose(
      transpose(
        a
          .reduce((pre, cur, i) => pre[i & 1].push(cur) && pre, [[], []])
          .map(v => recursiveDFT(v))
      ).map((v, i) => [
        complex.add(
          v[0],
          complex.mul(
            complex.fromAngle(
              i *
                (inverse ? (-2 * Math.PI) / a.length : (2 * Math.PI) / a.length)
            ),
            v[1]
          )
        ),
        complex.minus(
          v[0],
          complex.mul(
            complex.fromAngle(
              i *
                (inverse ? (-2 * Math.PI) / a.length : (2 * Math.PI) / a.length)
            ),
            v[1]
          )
        )
      ])
    )
  ).map(v => (inverse ? complex.numMul(1 / a.length, v) : v));
};

var x = [complex(1), complex(2), complex(0), complex(0)]; // 1 + 2x
var y = [complex(3), complex(4), complex(0), complex(0)]; // 3 + 4x

var rx = recursiveDFT(x);
console.log(rx);
console.log(recursiveDFT(rx, true)); // almost same as x

var ry = recursiveDFT(y);
console.log(ry);
console.log(recursiveDFT(ry, true)); // almost same as y

var rc = rx.map((v, i) => complex.mul(v, ry[i]));
console.log(rc);
console.log(recursiveDFT(rc, true)); // almost same as [complex(3), complex(10), complex(8), complex(0)]
