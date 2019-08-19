console.log('Masha pila sok'.split(' ').map(i=>i.length).reverse().reduce((acc, cur) => Math.pow(acc, cur)))

// -----------------------------------------------------------------
inBeetween = (a,b) => {
  return x => a<= x & x <= b
}
console.log([1,2,3,4,5,6,7,8,9].filter(inBeetween(3,7)))
// -----------------------------------------------------------------
