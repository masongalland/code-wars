function twoOldestAges(arr){
    return arr.sort((a,b) => a - b).slice(-2)
}
