# TypeScript Type Guard Bug: Null Check Doesn't Handle Undefined

This repository demonstrates a common, subtle bug in TypeScript type guards.  A simple null check can fail to handle the `undefined` value, potentially leading to runtime errors.

## The Bug

The `printName` function intends to gracefully handle cases where the input `name` is null. However, it fails to handle `undefined`. This results in a runtime error if `undefined` is passed as an argument.

## Solution

The solution involves expanding the type guard to explicitly check for both `null` and `undefined`, ensuring the function behaves correctly in all scenarios. This makes the code more resilient.