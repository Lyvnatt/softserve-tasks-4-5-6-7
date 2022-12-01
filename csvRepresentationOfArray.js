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

