// This function takes an array of numbers and returns the sum of all elements in the array
function sum(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
