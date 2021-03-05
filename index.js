function fizzBuzz(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz'
  }
  else if (val % 3 === 0) {
    return 'Fizz'
  }
  else if (val % 5 === 0) {
    return 'Buzz'
  }
  else {
    return val
  }
}

console.log(fizzBuzz(12))
console.log(fizzBuzz(55))
console.log(fizzBuzz(60))
console.log(fizzBuzz(14))

function fizzBuzzCounter(val) {
  for (let i=1; i<=val; i++) {
    console.log(fizzBuzz(i));
  }
}

fizzBuzzCounter(15)