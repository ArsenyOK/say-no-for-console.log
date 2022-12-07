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




