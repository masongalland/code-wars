// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]


function sumOfDivided(arr){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        var factors = Array.from(Array(Math.abs(arr[i] + 1)), (_, x) => x).filter(x => arr[i] % x === 0);
        console.log(arr[i], factors)
        factors.forEach(e => {
            let prime = e !== 1;
            for(var j=2; j<e; j++) {
                if(e % j == 0) {
                    prime = false;
                    break;
                }
            }
            if(prime){
                var exists = false;
                for(var k = 0; k < newArr.length; k++){
                    if(newArr[k][0] === e){
                        exists = true;
                        newArr[k][1] += arr[i]
                    }
                }
                if(!exists){
                    newArr.push([e, arr[i]])
                }
            }
        })
    }
    return newArr.sort((a,b) => a[0] - b[0])
 }

/*
1. loop through main array (arr).
2. In the loop, create an array (factors) of factors of each element in arr.
3. loop through factors to test for prime values.
4. if value is prime, check to see if it is in a nested array in newArr.
5. if it is not in newArr, push an array to newArr (first value being the prime factor, second value being arr[i])
6. if it is already in newArr, add arr[i] to the second value of the nested array
7. return newArr





3. filter the factors array and keep prime values.
4. Push a new object(with a key of original that has a value of arr[i] and a key called primes, which is the filtered array of prime factors) to an array (newArr) located in the root of the function.
5. 
*/