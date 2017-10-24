function findMissingNumber(str){
    var arr = str.split("").sort((a,b) => a-b);
    if(!arr.every(e=> typeof e === "number")){
        return 1
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] !== arr[i] + 1){
            return arr[i] + 1
        }
    }
    return 0;
}