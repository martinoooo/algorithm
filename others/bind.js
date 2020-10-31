Function.prototype.bind2 = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }

  var self = this;

  var fBound = function (...bindArgs) {
    return self.apply(
      this instanceof self ? this : context,
      args.concat(bindArgs)
    );
  };

  fBound.prototype = Object.create(self.prototype);
  return fBound;
};

// test
var value = 2;

var foo = {
  value: 1,
};

function bar(name, age) {
  this.habit = "shopping";
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin";

var bindFoo = bar.bind2(foo, "daisy");
bindFoo.prototype.friend = "kevin2";

var obj = new bar("18");
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
