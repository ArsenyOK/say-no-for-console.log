# Say No for console.log

I wanna talk about debugging here. Every developer thinks about debugging the code. And very simple way it's using console.log everywhere.
But I guess you thought about console.log is gotten old and here I show you What you can use Instead of console.log

**Web API** has a lot of other logs. 

### 1. Console.table
Display datasets in a table format.
This function takes one required argument `data`, which must be an array or object, and one optional parameter `columns`.

The `data` argument can be an array or an object.

*Example*
```no-highlight
console.table(["limon", "apple", "orange", "brewberry", "cherry"]);
```
*View*

![tableLogs](https://user-images.githubusercontent.com/43606985/206253995-ad376f85-b160-46bc-bf7e-fd4a21362bd9.PNG)

### 2. Console.group
Create new group of message in browser console.
After calling the next message printed to the console, additional indentation levels will be available until the `console.groupEnd()` call is called.

*Example*
```no-highlight
console.group("Array and Object view");
console.log({
  name: "John",
  age: 18,
  status: "Front-end",
};);
console.log(["limon", "apple", "orange", "brewberry", "cherry"]);
console.groupEnd("");
```
*View*

![GroupLogs](https://user-images.githubusercontent.com/43606985/206258437-92b5f4d0-4eeb-4a04-8fa7-7f99252923aa.PNG)

### 3. Console.time
The `console.time()` method starts a timer you can use to track how long an operation takes. With it you can find out What methods or function you need to use for realisation. But do not forget to put `console.timeEnd()`.It shows ending of timer.

*Example*
```no-highlight
console.time();
let mapArr = arr.map((item, index) => index + ": " + item);
console.timeEnd();

let loopArray = arr;

console.time();
for (let i = 0; i < loopArray.length; i++) {
  loopArray[i] = i + ": " + loopArray[i];
}
console.timeEnd();
```

In this example we can see which operation faster

*View*

![timeLogs](https://user-images.githubusercontent.com/43606985/206260919-160e7d5d-e151-481f-846b-bd2061f45c25.PNG)

### 4. Console.assert
`console.assert` displays error message If the assertion is true. If the assertion is false, nothing is displayd.
I'd use it in server requests

*Example*
```no-highlight
const flag = true;

console.assert(flag === false, "False");
console.assert(flag === true, "Nothig to display");
```

*View*

![assertLogs](https://user-images.githubusercontent.com/43606985/206261650-21ba2d35-5226-4b5a-a88f-0e23371b136b.PNG)

### 5. Console.dir
This `console.dir()` has little difference between `console.log()`. But It's especially for Object.

*Example*
```no-highlight
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
```

*View*

![dirLogs](https://user-images.githubusercontent.com/43606985/206262658-7585bdd8-3d53-4daa-8190-3eb8ab0e1244.PNG)

### 6. Console.count
This `console.count` method logs displays the number of times that this particular call to count() has been called.

I'd recommend this method especially for React. Because with using it we can count How many renders were and it's so useful. And ease quantity of renders. Our project will be optimized

*Example*
```no-highlight
const countFun = (arg) => {
  console.count(arg);
};

countFun("First");
countFun("Second");
countFun("Third");
```

*View*

![countLogs](https://user-images.githubusercontent.com/43606985/206264124-8c7a24f9-61b5-4e70-8583-3e366fc1b6fd.PNG)

### 7. Console.trace
`console.trace()` method to output a stack trace.

What is it for?

This method shows methods between child and parent methods, Which ones were executed. Below you will understand What I mean.

*Example*
```no-highlight
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
```

*View*

![traceLogs](https://user-images.githubusercontent.com/43606985/206265914-baabf68a-55de-4a85-86e1-74c1699fd9b7.PNG)

### 7. Console.profile
`console.profile() console.profileEnd()` methods to measure the performance of a block of code. Those methods show us Where our code is started and ended.

*Example*
```no-highlight
console.profile("Loop");

for (let i = 0; i < 10; i++) {}

console.profileEnd();
```

*View*

![profileLog](https://user-images.githubusercontent.com/43606985/206266663-fd45ac8a-b567-439f-aa63-c3d06c492c97.PNG)

### 8. Style your console
You can style your code It's nice ^)


**Important:** Style your `console.log` for this important to write %c . Without that our message won't be changed

*Example*
```no-highlight
console.log("%cHello World ^)", "color: green; font-weight: bold");
```

*View*

![styleLogs](https://user-images.githubusercontent.com/43606985/206267038-419115ae-d4e4-43b1-8fa5-df597ed114c8.PNG)





