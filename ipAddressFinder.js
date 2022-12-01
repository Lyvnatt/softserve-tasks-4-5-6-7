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
