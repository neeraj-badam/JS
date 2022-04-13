var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

let index = 0;
for(let i of a)
{
    console.log(`row ${index++}`);
    for(let j of i)
    {
        console.log(j);
    }
}