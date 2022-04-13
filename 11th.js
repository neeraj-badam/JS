arr = [1,2,3,4,5]


var sum = 0;
  
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum is " + sum)

var prod = 1;
  
for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
}

console.log("Product is " + prod)