const obj = {
  name: "John",
  age: 18,
  status: "Front-end",
};

const arr = ["limon", "apple", "orange", "brewberry", "cherry"];

console.log(obj, "obj");
console.log(arr, "array");

// You know it looks not beautiful and unreadable

//So What I recommend to use for debugging:

// 1) console.table Displays datasets in a table format.

console.table(arr, "array console.table");
console.table(obj, "obj console.table");

// 2) console.group console.groupEnd

console.group("Array and Object view");
console.log(obj);
console.log(arr);
console.groupEnd("");

// 3) console.time console.timeEnd  Display start and end time

console.time();
let mapArr = arr.map((item, index) => index + ": " + item);
console.timeEnd();

let loopArray = arr;

console.time();
for (let i = 0; i < loopArray.length; i++) {
  loopArray[i] = i + ": " + loopArray[i];
}
console.timeEnd();

// 4) console.assert  Displays error message If the assertion is true. If the assertion is false, nothing is displayd

const flag = true;

console.assert(flag === false, "False");
console.assert(flag === true, "Nothig to display");

// 5) Style your console.logs for this important to write %c . Without that our message won't be changed

console.log("%cHello World ^)", "color: green; font-weight: bold");

// 6) console.trace method to output a stack trace.

function barfoo() {
  function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }

  foo();
}

barfoo();

// 7) console.dir Displays list of properties in Javascript Object

const personObj = {
  names: {
    firstName: "Jack",
    secondName: "Own",
  },
  age: "30",
  address: {
    street: "06 DOYERS ST. 8 ARLINGTON DR. 599 NW BAY BLVD",
    country: "The USA",
  },
};

console.log(personObj);
console.dir(personObj);

// 8) console.count  method logs the number of times that this particular call to count() has been called.

const countFun = (arg) => {
  console.count(arg);
};

countFun("First");
countFun("Second");
countFun("Third");

// 9) console.clear merely clear your browser console at all

// console.clear

// 10) console.profile console.profileEnd methods to measure the performance of a block of code.

console.profile("Loop");

for (let i = 0; i < 10; i++) {}

console.profileEnd();
