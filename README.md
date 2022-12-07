# Say No for console.log

I wanna talk about debugging here. Every developer thinks about debugging the code. And very simple way it's using console.log everywhere.
But I guess you thought about console.log is gotten old and here I show you What you can use Instead of console.log

**Web API** has a lot of other logs. 

### 1. Console.table
Displays datasets in a table format.
This function takes one required argument `data`, which must be an array or object, and one optional parameter `columns`.

The `data` argument can be an array or an object.

*Example*
```no-highlight
console.table(["limon", "apple", "orange", "brewberry", "cherry"])
```

![tableLogs](https://user-images.githubusercontent.com/43606985/206182834-296b2bc7-3247-40a4-b759-4a2d1fded65d.PNG, 'console.table displays')
