# JavaScript & TypeScript Questions

This repository contains questions on JavaScript and TypeScript, which were originally published in the form of quizzes in the telegram channel https://t.me/intspirit.

A typical question is what the given piece of code will output. However, there are others. For example, the `memory-usage` and `optimization` folders contain questions about memory leaks, the performance of a particular piece of code, and more.

Use these questions to prepare for an interview or to test your language skills.

Each question is contained in a separate file.

In the comment to the question there is a link to an explanation of the problem. Even if you answered the question correctly, it is recommended to read the explanation, because it may reveal additional interesting details.

## Example

```
function log(arg) {
  console.log(arg);
}

log(...'abc');

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/626?comment=674

```

If you follow the link, you will read this explanation:

```
The spread (...) syntax allows an iterable, such as string or array, to be expanded in function call's arguments list.

log(...'abc')

is equivalent to

log('a', 'b', 'c');

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
```

## Categories of questions

The repository is live and will be regularly updated with new challenges. The repository currently contains questions in the following categories:

### JavaScript

1. [Arguments](/js/arguments/)
2. [Arrays](/js/arrays/)
3. [Classes](/js/classes/)
4. [Context](/js/context/)
5. [Destructoring & rest & spread](/js/destructuring&rest&spread/)
6. [ES6 modules](/js/es6-modules/)
7. [Event loop](/js/es6-modules/)
8. [Html events](/js/events/)
9. [Generators](/js/generators/)
10. [JSON](/js/json/)
11. [Map & WeakMap](/js/Map&WeakMap/)
12. [Memory usage](/js/memory-usage/)
13. [Objects](/js/objects/)
14. [Optimiation](/js/optimization/)
15. [Promises](/js/promises)
16. [Prototypes](/js/prototypes)
17. [Set](/js/Set)
18. [Strings](/js/strings/)
19. [Symbols](/js/symbols/)
20. [Type coercion](/js/type-coercion/)
21. [Variable scope](/js/variable-scope/)
22. [Workers](/js/workers/)
23. [Other](/js/other)

### [TypeScript](/ts/)

Let's learn the language we use every day.

### Let's make IT better!
