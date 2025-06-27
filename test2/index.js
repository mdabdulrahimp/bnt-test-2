function findMostRepeatedChar(str) {
  let charcount = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charcount[char]) {
      charcount[char]++;
    } else {
      charcount[char] = 1;
    }

    if (charcount[char] > maxCount) {
      maxCount = charcount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

document.getElementById("t1").onclick = function () {
  let inputStr = prompt("Enter a string to find the most repeated character:");

  let result = findMostRepeatedChar(inputStr);
  alert("The most repeated character is: " + result);
};

function finduniqueelementsin2array(arr1, arr2) {
  let uniqueElements = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (!uniqueElements.has(arr2[i])) {
      uniqueElements.add(arr2[i]);
    } else {
      uniqueElements.delete(arr2[i]);
    }
  }

  return Array.from(uniqueElements);
}

document.getElementById("t2").onclick = function () {
  let inputStr1 = prompt("Enter first array elements separated by commas:");
  let inputStr2 = prompt("Enter second array elements separated by commas:");

  let arr1 = inputStr1.split(",").map(Number);
  let arr2 = inputStr2.split(",").map(Number);

  let result = finduniqueelementsin2array(arr1, arr2);
  alert("Unique elements from both arrays: " + result.join(", "));
};

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
document.getElementById("t3").onclick = function () {
  let inputStr = prompt("Enter a sentence to find the longest word:");

  let result = findLongestWord(inputStr);
  alert("The longest word is: " + result);
};

function chain(value) {
  return {
    add(n) {
      value += n;
      return this;
    },
    subtract(n) {
      value -= n;
      return this;
    },
    multiply(n) {
      value *= n;
      return this;
    },
    divide(n) {
      value /= n;
      return this;
    },
    result() {
      return value;
    },
  };
}

let res = chain(5).add(2).subtract(1).result();
document.getElementById("t4").onclick = function () {
  alert(
    "Result of chained operations: chain(5).add(2).subtract(1).result(): " + res
  );
};

console.log("task 5 of java script");
console.log(
  "function hoisting is a concept in JavaScript where function declarations are moved to the top of their containing scope during the compile phase."
);
console.log(
  'example of function hoisting:\nsayHello();\nfunction sayHello() {\n  console.log(" Hello!");\n}\noutput:'
);

sayHello();
function sayHello() {
  console.log(" Hello!");
}

console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5

console.log(b); // ReferenceError
let b = 10;
