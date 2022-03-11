# Fizz Buzz Kata

The following is a TDD Kata, an exercise in coding, refactoring and test-first.

## Before you start

- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.

## The kata

### Step 1

- Complete the test in fizz-buzz.test.js to test the function 'fizzbuzz' returns the string '1 2' when passed an argument 2.
- Run the tests and make sure the new test fails.
- Implement the fizzbuzz function so that it returns a string of numbers separated by spaces, from 1 to n (where n is the number to stop counting).
- Run the test and make sure it passes.

### Step 2

- Add a new test in fizz-buzz.test.js to test the function 'fizzbuzz' returns the string '1 2 Fizz' when passed an argument 3.
- Run the tests and make sure the new test fails.
- Extend the fizzbuzz function so that if the number is a multiple of 3, it should be replaced with 'Fizz' in the final string. The requirements from step 1 remain the same.
- Run the tests and make sure all of them pass.

### Step 3

- Add a new test in fizz-buzz.test.js to test the function 'fizzbuzz' returns the string '1 2 Fizz 4 Buzz' when passed an argument 5.
- Run the tests and make sure the new test fails.
- Extend the fizzbuzz function so that if the number is a multiple of 5, it should be replaced with 'Buzz' in the final string. The requirements from steps 1 & 2 remain the same.
- Run the tests and make sure all of them pass.

### Step 4

- Add a new test in fizz-buzz.test.js to test the function 'fizzbuzz' returns the string '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz' when passed an argument 15.
- Run the tests and make sure the new test fails.
- Extend the fizzbuzz function so that if the number is a multiple of both 3 and 5, it should be replaced with 'FizzBuzz' in the final string. The requirements from steps 1, 2 & 3 remain the same.
- Run the tests and make sure all of them pass.

Sample output:

```
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz
... etc up to n
```
