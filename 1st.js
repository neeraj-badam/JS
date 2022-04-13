function checkArray(a)
{
    return Array.isArray(a)
}

a = [1,2,3]
res = checkArray(a)
console.log(res)
a = checkArray(1,2,3)
console.log(a)