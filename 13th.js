var arr1=[3, 'a', 'a', 'a', 2, 3, 'A', 3, 'a', 2, 4, 9, 3];

let res = new Set();
for(let i of arr1)
{
    if( typeof i === 'string')
        res.add( i.toLowerCase() );
    else
        res.add(i)
}
console.log(res)