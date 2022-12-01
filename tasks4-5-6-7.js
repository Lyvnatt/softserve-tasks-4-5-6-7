//Hi
//CSV representation of array - First solution
function cvsRepresentation1(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i != array.length - 1) {
      result += '\n'
    }
  }
  return result;
}

let example1 = [[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]] 

console.log(cvsRepresentation1(example1));


//CSV representation of array - Second solution
function cvsRepresentation2 (array){
  return array.join("\n");
}

let example2 = [[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]]

console.log(cvsRepresentation2(example2));


//IP address finder [Code-golf]
function ipAddressFinder(url) {
  let result = 0;

  for (const element of url) {
    result += element.charCodeAt();
  };

  let num = [1,2,3,4];
  let final = num.map(num => result * num % 256)

  return final;
}

console.log(ipAddressFinder('www.codewars.com'));
console.log(ipAddressFinder('www.starwiki.com'));
console.log(ipAddressFinder('www.winnerss.win'));


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


//Moving Zeros To The End
function moveZeros(array) {
  let others = [];
  let zeros = [];
  
  array.map(value => value === 0 ? zeros.push(0) : others.push(value))
  
  return [...others, ...zeros];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
