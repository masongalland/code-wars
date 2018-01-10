/*
    An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.
*/

function zeroPlentiful(arr){
    arr.forEach((e,i,a) => {
        if(e !== 0){
        a[i] = "_"
        }
    })

    const sequences = arr.join('').split("_")

    return sequences.every((e) => e.length >= 4) ? sequences.length : 0
}