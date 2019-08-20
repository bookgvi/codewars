function initArr(times, create) {
  return  () => {
    let arr = []
    for(let i=0; i<times; i++){
      arr.push(create())
    }
    return arr
  }
}
fun1 = () => {
  return Math.floor((Math.random()*100)+1)
}
fun2 = () => 'WTF'

aaa=initArr(10, fun1)

console.log(aaa())