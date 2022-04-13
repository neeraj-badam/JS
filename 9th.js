let str = 'The Quick Brown Fox'

let res = '';
for(let i=0;i<str.length;i++)
{
    if(str[i] === str[i].toLowerCase())
        res += str[i].toUpperCase();
    else
        res += str[i].toLowerCase();
}

console.log(res);