# Project Euler 021 - Amicable Numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a does not equal b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.  The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

The aim is to find the sum of all the amicable numbers less than a certain value (e.g. 10000) using HTML Forms and JavaScript.

Information at [Project Euler 021](https://projecteuler.net/problem=21)

## UX

**Getting Started**

In the input field, enter a number

**User Stories**

As a user, I expect the function `sumAmicableNum(1000)` to return a number.

As a user, I expect the function `sumAmicableNum(1000)` to return 504.

As a user, I expect the function `sumAmicableNum(2000)` to return 2898.

As a user, I expect the function `sumAmicableNum(5000)` to return 8442.

As a user, I expect the function `sumAmicableNum(10000)` to return 31626.

**Information Architecture**

The function `sumAmicableNum(n)` returns a number, where `n` is a number.