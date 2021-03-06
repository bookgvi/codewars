globals = {}
function makeBindFun(resolver) {
  return function(k, v) {
    var stack = globals[k] || [];
    globals[k] = resolver(stack, v);
    return globals;
  };
}
var stackBinder = makeBindFun(function(stack, v) {
  stack.push(v);
  return stack;
});
var stackUnbinder = makeBindFun(function(stack) {
  stack.pop();
  return stack;
});

stackBinder(1,2)
stackBinder(2,3)
stackBinder(3,4)