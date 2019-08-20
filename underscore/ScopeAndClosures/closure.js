function initMap(val){
  return function closure(arr){
    this.val = val;
    self = this
    return arr.map((function(item){
      return item * this.val
    }).bind(self))
  }
}

start = initMap(10);
console.log(start.call(null, [1,2,3]))


function average(arr){
  return (arr.reduce((acc, cur) => acc+cur))/arr.length
}
function averageInit(value1){
  return (value2)=> {
    return average([value2, value1(value2)])
  }
}
avResult = averageInit(n=>n*n)
console.log(avResult(4))

console.log(Math.max(...[1,2,3,5]))
console.log(Math.max.apply(null,[1,2,3,4,5]))