//Pascal's Triangle #2

function pascalTriGen(depth) {
  let arr = [];
  let subArr = [];
  
  for (let i = 0; i < depth; i++ ) {
    subArr = [];
    for (let j = 0; j <= i; j++ ) {
      switch(j) {
        case 0: subArr.push(1); 
        break;   
        case i: subArr.push(1); 
        break;
        default: subArr.push(arr[i-1][j] + arr[i-1][j-1]);
      }
    }
    arr.push(subArr);
  }
  
  return arr;
}

console.log(pascalTriGen(5));
console.log(pascalTriGen(7));
