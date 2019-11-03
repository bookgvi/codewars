const fn = function () {
  return _ => {
    let sum = 0
    for (let i = arguments.length; i > 0; i--) {
      sum += i
    }
    return sum
  }
}

const sum  = fn(1, 2, 3, 4, 5)
console.log(sum())