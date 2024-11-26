function sum(a, b) {
    return a + b
}

function calc(a, b, o) {
    if (o === '+') {
        return a + b
    }
    if (o === '-') {
        return a - b
    }
    if (o === '*') {
        return a * b
    }
    if (o === '/') {
        return a / b
    }
}

function trianglechecker(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log('none')
    } else if (a <= 0 || b <= 1 || c <= 1) {
        console.log('none')
    } else if (a === b && b === c) {
        console.log('equilateral')
    } else if (a === b && b != c || b === c && c != a || a === c && c != b)
        console.log('isosceles')
    else if (a != b && b != c) {
        console.log('scalene')
    }
}

export { sum, calc, trianglechecker };