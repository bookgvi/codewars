const _ = require('underscore')

function fun(pred){
  return function(){
    return !pred.apply(null, arguments)
  }
}

console.log(_.filter([1,2,3,4,5,5,"a",'s','g'], fun(_.isString)))

console.log([1,2,3,4,'a','b'].filter(fun(isNaN)));

console.log(isNaN.apply(null, [1,2,3,'a','b','c']))