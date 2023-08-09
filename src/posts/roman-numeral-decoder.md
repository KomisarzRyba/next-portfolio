---
title: 'Roman Numeral Decoder'
date: '2023-08-09'
tags: ['algorithm', 'typescript', 'interview problems']
---

# Roman Numeral Decoder

> Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

### Preparation

First step would be to store the relations between string representations of roman numerals and their equivalents in decimal. For example:

```tsx
const symbols = {
	'I': 1;
  'V': 5;
  'X': 10;
  'L': 50;
  'C': 100;
  'D': 500;
  'M': 1000;
}
```

### Solution

It is crucial to notice that in the roman numeral system there is an additional factor defining a given symbol’s value - its relative position: `"IV" != "VI"`. To get the value it is not enough to sum up the digits (symbols), we also need to know the order in which they exist:

If a symbol smaller in value precedes a larger one, it means we need to subtract it: `"I" + "V" => symbols["V"] - symbols["I"]`, otherwise we add them.

Therefore, we can iterate over the string of symbols backwards, at each step comparing the current element to the previous one. Keeping the above principles in mind, we apply them to each adjacent elements:

```tsx
let result = symbols[roman.slice(-1)];
  for (let i = roman.length-2; i >= 0; i--) {
    const prev = symbols[roman[i+1]];
    const cur = symbols[roman[i]];
    if (cur < prev) {
      result -= cur
    }
    else {
      result += cur
    }
  }
  return result;
}
```

### Summary

The time complexity of this algorithm is O(n), where n is the length of the input Roman numeral string. This is because we iterate over each symbol in the string once. The space complexity is also O(1), because we only use a fixed amount of memory to store the symbols dictionary and a few variables in the function.
