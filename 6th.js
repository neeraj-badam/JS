const readline = require("readline-sync");
  
// Enter the number
let a = readline.question();

let s = "",len = a.length;
s = a[0]
for(let i=1;i<len;i++)
{
    let prev = parseInt(a[i-1]);
    let curr = parseInt(a[i]);
    if(prev%2 == 0 && curr%2 == 0)
        s += '-' + a[i];
    else
        s += a[i];
}


console.log(s)