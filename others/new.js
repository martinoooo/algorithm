function objectFactory(Constructor, ...arguments) {
  var obj = Object.create(Constructor.prototype);

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = "Games";
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log("I am " + this.name);
};

var person = objectFactory(Otaku, "Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60

person.sayYourName(); // I am Kevin
