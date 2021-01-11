W02D1 
Mon Nov 30
Outline & Notes
 
(2)
Lectures
 
(1)
Work
 
(19)
6 hrs + 2 hrs stretch 

Lotide Refactor Example
Refactor tail
Refactor eqArrays
Refactor assertArraysEqual
Refactor middle
Incorporate Mocha and Chai
Refactor with Mocha and Chai I
Exporting All Functions I
Exporting All Functions II
Object Shorthand in ES6
Implement Object Shorthand
Publishing Lotide To npm
Submitting Lotide
Title Case - Kata
Intro to Async Control Flow
setTimeout Introduction
More Lotide Cleanup
Programming Katas
Caesar Cipher - Kata
Other
 
(3)
POWERED BY
Lhl logo

×
Congrats on completing activity 'Implement Object Shorthand'!
Publishing Lotide To npm
Lotide Assignment
35 minutes
 Status
Incomplete
Wow... We've built a library of functions that we or other developers could actually use in other projects! This is great, but how will these other projects actually import our library?

Much like with Mocha, Chai, Chalk and other packages on npm, we can package up and publish our Lotide library to the public npm registry. In this activity, we'll be doing just that. Exciting!

Creating An NPM Account
In order to publish our package to npm, we first need an account on their website. More details on this can be found here.

Create an NPM account.

Sign up link: https://www.npmjs.com/signup

Your username is important, and we suggest keeping it professional (though it doesn't have to be your name or initials, etc. either).

Verify your email.

As they say:

You must verify your email address in order to publish packages to the registry.

Logging In To NPM From Vagrant
We can now log in using these credentials.

Log into npm from the command line.

In our Vagrant machine, run the npm login command from any directory. Follow the prompts to login successfully.

Having A README.md File
Before we publish our package, there's some best practices housekeeping that we need to follow first.

We need a README.md file. The readme file explains to other developers what this library is for, how to install it, and how to use it.

Create a README.md file within the root of your project (lotide) folder.

Paste the following template into README.md.

README Template
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mccalljoey/lotide`

**Require it:**

`const _ = require('@mccalljoey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: the boolean value of an array
* `assertEqual(actual, expected)`: the boolean value 
* `assertObjectEqual(object1, object2)`: the boolean value of an obj
* `countLetters(string)`: counts the letters within the string
* `countOnly(allItems, itemsToCount)`: counts the specific values
* `eqArrays(array1, array2)`: loops through the array to determine it
* `findKey(object, con)`: finding the key within an object through the function provided
* `findKeyByValue(object, value)`: finding the key within an object through the value provided
* `head(array)`: find head
* `letterPositions(sentence)`: determine the positions of the letters in the sentence
* `map(array, callback)`: map the array
* `middle(arr)`: list the middle of the array
* `tail(array)`: list the tail of the array
* `takeUntil(array, callback)`: list the array until
* `without(arr, value)`: the array without the specified value