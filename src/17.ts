function add(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

add([1, 2, 3]);
