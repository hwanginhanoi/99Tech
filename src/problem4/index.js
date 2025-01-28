function sumToNA(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToNB(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumToNB(n - 1);
}

function sumToNC(n) {
    return (n * (n + 1)) / 2;
}

console.group('Problem 4: Three ways to sum to n');
console.log(`sumToNA(7) : ${sumToNA(7)}`);
console.log(`sumToNB(7) : ${sumToNB(7)}`);
console.log(`sumToNC(7) : ${sumToNC(7)}`);
console.groupEnd();