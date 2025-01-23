# Stack Overflow in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow.  The `foo` function calculates a sum recursively, but without a proper base case for large inputs, it exceeds the call stack limit.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected iterative solution to the problem. This iterative approach avoids stack overflow by using a loop instead of recursion.