function returnArr(arr,n = 1)
{
    return arr.slice(arr.length-n);
}

arr = [1,2,3,4,5]
res = returnArr(arr)
console.log(res)

res = returnArr(arr,2)
console.log(res)