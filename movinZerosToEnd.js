//Moving Zeros To The End
function moveZeros(array) {
  let others = [];
  let zeros = [];
  
  array.map(value => value === 0 ? zeros.push(0) : others.push(value))
  
  return [...others, ...zeros];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
