function sofrArr(arr){
  for(let i = 0; i< arr.length; i++){
    if(arr[i] > arr[i+1]){
      let a = arr[i];
      let b = arr[i+1];
      arr[i] = b;
      arr[i+1] = a;
    }
  }
  return arr
}

let arr = []
for (let i = 1; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 1000))
}

console.log(sofrArr(arr))