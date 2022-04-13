var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let max = 1,res = arr[0];

var m = new Map();
for(let i of arr){
    if(!m.has(i))
        m.set(i,1)
    else
    {
        m.set( i, 1 + m.get(i) )
        if(max < m.get(i))
        {
            max = m.get(i);
            res = i;
        }
    }
}

console.log(res)