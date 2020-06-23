/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  let alength = 0;
  let blength = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "a") {
      alength++;
    } else {
      blength++;
    }
  }

  // console.log(alength, blength);
  if (alength === 0 && blength === 0) {
    if (value === "") {
      return true;
    }
    return false;
  }
  if (alength === 0 || blength === 0) {
    const len = alength || blength;
    let wordl = Math.floor(value.length / len);
    const word = value.substr(0, wordl);
    let index = wordl;
    for (let j = 1; j < pattern.length; j++) {
      const temp = value.substr(index, wordl);
      if (temp !== word) {
        return false;
      }
      index += wordl;
    }
    if (index !== value.length) {
      return false;
    }
    return true;
  }

  let alen = 0;
  let blen = 0;
  let firstP = "";
  if (pattern[0] === "a") {
    alen = alength;
    blen = blength;
    firstP = "a";
  }
  if (pattern[0] === "b") {
    alen = blength;
    blen = alength;
    firstP = "b";
  }
  let maxWordL = Math.floor(value.length / alen);
  for (let i = maxWordL; i > -1; i--) {
    const word = value.substr(0, i);
    let anotherWord = "";
    let index = word.length;
    const anotherWordl = Math.ceil((value.length - i * alen) / blen);
    for (let j = 1; j < pattern.length; j++) {
      if (pattern[j] === firstP) {
        const temp = value.substr(index, i);
        if (temp !== word) {
          break;
        }
        index += i;
      } else {
        const temp = value.substr(index, anotherWordl);
        if (!anotherWord) {
          anotherWord = temp;
        } else {
          if (anotherWord !== temp) {
            break;
          }
        }
        index += anotherWordl;
      }

      if (j === pattern.length - 1 && word !== anotherWord) {
        return true;
      }
    }
  }

  return false;
};

console.log(patternMatching("abba", "dogcatcatdog")); // ture
console.log(patternMatching("aaaa", "dogdogdogdog")); // ture
console.log(patternMatching("", "x")); // false
console.log(patternMatching("", "")); // true
console.log(patternMatching("ab", "")); // false
console.log(patternMatching("a", "")); // ture
console.log(patternMatching("bbbaa", "xxxxxxy")); //false
console.log(
  patternMatching(
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "p"
  )
); //false
