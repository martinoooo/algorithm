// function add(...num) {
//   let curr = function (...out) {
//     return add.apply(this, num.concat(out));
//   };
//   curr.value = function () {
//     return num.reduce(function (pre, cur) {
//       return pre + cur;
//     });
//   };
//   return curr;
// }
// console.log(add(1)(2, 3)(4).value());

class Queue {
  constructor() {
    this.queue = {};
  }

  task(time, calback) {
    if (this.queue[time]) {
      this.queue[time].push(calback);
    } else {
      this.queue[time] = [calback];
    }
    return this;
  }

  start() {
    Object.keys(this.queue).map((time) => {
      setTimeout(() => {
        this.queue[time].forEach((c) => c());
      }, time);
    });
  }
}

new Queue()
  .task(2000, function () {
    console.log(2);
  })
  .task(1000, function () {
    console.log(1);
  })
  .start();
