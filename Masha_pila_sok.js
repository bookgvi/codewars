arr = []
'Masha pila sok'.split(' ').forEach(i => {arr.push(i.length)})
console.log(arr.reverse().reduce((prev, cur) =>  Math.pow(prev, cur)))